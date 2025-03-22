"use client";

import { useState } from "react";
import { trpc } from "@/app/_trpc/client";
import { serverClient } from "@/app/_trpc/serverClient";

export default function GetUser({ email }: { email: string }) {
	const {
		data: user,
		isLoading,
		isError,
		refetch,
	} = trpc.getUser.useQuery(
		{ email },
		{
			refetchOnMount: false,
			refetchOnReconnect: false,
		}
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error loading user</div>;
	}

	return <div>User: {JSON.stringify(user?.firstName)}</div>;
}
