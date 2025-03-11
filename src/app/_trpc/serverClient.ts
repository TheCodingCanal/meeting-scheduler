import { createTRPCProxyClient } from "@trpc/client";
import { httpBatchLink } from "@trpc/client";
import { AppRouter } from "@/server"; // Adjust the path to your app router

export const serverClient = createTRPCProxyClient<AppRouter>({
	links: [
		httpBatchLink({
			url: "http://localhost:3000/api/trpc", // Your API endpoint
		}),
	],
});
