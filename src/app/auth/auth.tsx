"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const LoginButton = () => {
	const { status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "authenticated") {
			router.push("/home");
		}
	}, [status, router]);

	return (
		<Button
			size="lg"
			className="text-lg"
			onClick={() => signIn(undefined, { callbackUrl: "/home" })}
		>
			Sign in
		</Button>
	);
};

export const LogoutButton = () => {
	return (
		<Button
			size="lg"
			className="text-lg"
			onClick={() => signOut({ callbackUrl: "/ " })}
		>
			Sign Out
		</Button>
	);
};
