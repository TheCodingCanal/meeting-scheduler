import { publicProcedure, router } from "./trpc";
import { prisma } from "@/lib/database";
import { hash } from "bcrypt";
import { z } from "zod";

export const appRouter = router({
	// return user matching the email
	getUser: publicProcedure
		.input(z.object({ email: z.string() }))
		.query(async ({ input }) => {
			const user = await prisma.user.findUnique({
				where: { email: input.email },
			});
			return user;
		}),
	// update existing user
	updateUser: publicProcedure
		.input(
			z.object({
				id: z.string(),
				name: z.string(),
				firstName: z.string(),
				lastName: z.string(),
				nickname: z.string(),
				role: z.string(),
				timezone: z.string(),
			})
		)
		.mutation(async ({ input }) => {
			const { id, name, firstName, lastName, nickname, role, timezone } = input;
			const user = await prisma.user.update({
				where: { id },
				data: {
					name,
					firstName,
					lastName,
					nickname,
					role,
					timezone,
				},
			});
			return user;
		}),
	// add new user
	createUser: publicProcedure
		.input(
			z.object({
				email: z.string(),
				password: z.string(),
				name: z.string(),
				firstName: z.string(),
				lastName: z.string(),
				nickname: z.string(),
				role: z.string(),
				timezone: z.string(),
			})
		)
		.mutation(async ({ input }) => {
			const {
				email,
				password,
				name,
				firstName,
				lastName,
				nickname,
				role,
				timezone,
			} = input;

			try {
				// Check if user already exists
				const existingUser = await prisma.user.findUnique({ where: { email } });
				if (existingUser) {
					throw new Error("Email is already in use.");
				}

				// Hash password before storing
				const hashedPassword = await hash(password, 12);

				const user = await prisma.user.create({
					data: {
						email,
						password: hashedPassword,
						name,
						firstName,
						lastName,
						nickname,
						role,
						timezone,
					},
				});
				return user;
			} catch (error) {
				throw new Error("User creation failed. " + (error as Error).message);
			}
		}),
	upsertUser: publicProcedure
		.input(
			z.object({
				email: z.string().email(),
				name: z.string().optional(),
			})
		)
		.mutation(async ({ input }) => {
			const { email, name } = input;
			const [firstName, lastName] = name?.split(" ") ?? ["", ""];
			return await prisma.user.upsert({
				where: { email },
				create: {
					email,
					name: name ?? "Unknown User",
					password: "", // No password for social login
					role: "user",
					timezone: "",
					firstName,
					lastName,
					nickname: "",
				},
				update: { name: name ?? "Unknown User", firstName, lastName },
			});
		}),
});

export type AppRouter = typeof appRouter;
