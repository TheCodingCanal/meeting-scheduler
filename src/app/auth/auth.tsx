"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const LoginButton = () => {
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
		<Button size="lg" className="text-lg" onClick={() => signOut()}>
			Sign Out
		</Button>
	);
};
