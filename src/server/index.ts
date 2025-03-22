import { publicProcedure, router } from "./trpc";
import { prisma } from "@/lib/database";
import { z } from "zod";

export const appRouter = router({
	getUser: publicProcedure
		.input(z.object({ email: z.string() }))
		.query(async ({ input }) => {
			const user = await prisma.user.findUnique({
				where: { email: input.email },
			});
			return user;
		}),
	addUser: publicProcedure
		.input(
			z.object({
				email: z.string(),
				password: z.string(),
				firstName: z.string(),
				lastName: z.string(),
				nickname: z.string(),
				role: z.string(),
				timezone: z.string(),
			})
		)
		.mutation(async ({ input }) => {
			const { email, password, firstName, lastName, nickname, role, timezone } =
				input;
			const user = await prisma.user.create({
				data: {
					email,
					password,
					firstName,
					lastName,
					nickname,
					role,
					timezone,
				},
			});
			return user;
		}),
});

export type AppRouter = typeof appRouter;
