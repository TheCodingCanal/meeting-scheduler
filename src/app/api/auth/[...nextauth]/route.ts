import { prisma } from "@/lib/database";
import { User } from "@prisma/client";
import { compare } from "bcrypt";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
	},
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
					return null;
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});

				if (!user) {
					return null;
				}

				const isPasswordValid = await compare(
					credentials.password, // user string
					user.password // encrypted string
				);

				if (!isPasswordValid) {
					return null;
				}

				return {
					id: user.id,
					email: user.email,
					name: user.firstName,
				};
			},
		}),
	],
	callbacks: {
		async signIn({ account, profile }) {
			if (!account) {
				console.error("No account found");
				return false;
			}

			// Handle social logins (Google, etc.)
			if (account.provider !== "credentials") {
				if (!profile?.email) {
					console.error("No profile email found");
					return false;
				}

				await prisma.user.upsert({
					where: { email: profile.email },
					create: {
						email: profile.email,
						name: profile.name as string,
						password: "", // Social providers don't need passwords
						role: "user",
						timezone: "",
						firstName: "",
						lastName: "",
						nickname: "",
					},
					update: {
						name: profile.name ?? "",
					},
				});

				return true;
			}

			// Handle CredentialsProvider (User is already validated in `authorize`)
			if (account.provider === "credentials") {
				return true;
			}

			return false;
		},
		session: ({ session, token }) => {
			console.log("Session Callback", { session, token });
			return session;
		},
		jwt: ({ token, user }) => {
			console.log("JWT Callback", { token, user });
			return token;
		},
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
