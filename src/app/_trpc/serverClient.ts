import { createTRPCProxyClient } from "@trpc/client";
import { httpBatchLink } from "@trpc/client";
import { AppRouter } from "@/server"; // Adjust the path to your app router

const apiUrl = process.env.TRPC_URL || "http://localhost:3000/api/trpc";

export const serverClient = createTRPCProxyClient<AppRouter>({
	links: [
		httpBatchLink({
			url: apiUrl, // Your API endpoint
		}),
	],
});
