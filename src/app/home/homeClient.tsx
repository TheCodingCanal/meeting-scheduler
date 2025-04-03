"use client";

import { useEffect } from "react";
import { userUserStore } from "../../../stores/userStore";
import { trpc } from "../_trpc/client";

export default function HomeClient({ session }: { session: any }) {
	const { user, update } = userUserStore();

	// Fetch user data from tRPC
	const { data: currentUser } = trpc.getUser.useQuery({
		email: session?.user?.email ?? "",
	});

	// Update store only when data is available and user is not already set
	useEffect(() => {
		if (currentUser && !user) {
			update(currentUser);
		}
	}, [currentUser, user, update]);

	return <main>Home</main>;
}
