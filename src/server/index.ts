import { publicProcedure, router } from "./trpc";
import { prisma } from "@/lib/database";
import { createCallerFactory } from "@trpc/server";
import { z } from "zod";

export const appRouter = router({
	getUsers: publicProcedure.query(async () => {
		const users = await prisma.user.findMany();
		return users;
	}),
});

export type AppRouter = typeof appRouter;
