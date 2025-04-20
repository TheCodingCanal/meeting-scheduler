import { compare } from "bcrypt";
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { serverClient } from "@/app/_trpc/serverClient";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

export const authOptions: NextAuthOptions = {
	session: { strategy: "jwt" },
	providers: [
		GoogleProvider({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
		}),
		CredentialsProvider({
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "hello@example.com",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password) {
					throw new Error("Email and password are required.");
				}

				const user = await serverClient.getUser.query({
					email: credentials.email,
				});

				if (!user) {
					throw new Error("User not found.");
				}

				const isPasswordValid = await compare(
					credentials.password,
					user.password
				);
				if (!isPasswordValid) {
					throw new Error("Invalid password.");
				}

				return {
					id: user.id,
					email: user.email,
					name: user.firstName,
					role: user.role,
				};
			},
		}),
	],
	callbacks: {
		async signIn({ account, profile }) {
			if (!account) return false;

			if (account.provider !== "credentials") {
				// Handle social logins (e.g., Google)
				if (!profile?.email) return false;

				try {
					// Call tRPC to upsert the user data
					// const upsertUserMutation = trpc.upsertUser.useMutation();
					await serverClient.upsertUser.mutate({
						email: profile.email,
						name: profile.name ?? "Unknown User",
					});
					return true; // Allow sign-in
				} catch (error) {
					console.error("Error upserting user via tRPC:", error);
					return false;
				}
			}

			// Handle CredentialsProvider (User is already validated in `authorize`)
			return account.provider === "credentials";
		},
	},
};
