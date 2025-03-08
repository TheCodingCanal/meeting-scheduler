"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export const RegisterForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [nickname, setNickname] = useState("");
	const [role, setRole] = useState("");
	const [timezone, setTimezone] = useState("");

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const res = await fetch("/api/register", {
				method: "POST",
				body: JSON.stringify({
					email,
					password,
					firstName,
					lastName,
					nickname,
					role,
					timezone,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (res.ok) {
				signIn();
			}
		} catch (error) {
			console.error(error);
		}
		console.log("registering user");
	};

	return (
		<form onSubmit={onSubmit} className="space-y-10 w-[600px]">
			<div className="flex space-x-10">
				<div className="space-y-9 w-[400px]">
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="email">Email</Label>
						<Input
							required
							value={email}
							id="email"
							type="email"
							className="border-solid border-gray-500"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="password">Password</Label>
						<Input
							required
							value={password}
							id="password"
							type="password"
							className="border-solid border-gray-500"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="firstName">First Name</Label>
						<Input
							required
							value={firstName}
							id="firstName"
							type="text"
							className="border-solid border-gray-500"
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="lastName">Last Name</Label>
						<Input
							required
							value={lastName}
							id="lastName"
							type="text"
							className="border-solid border-gray-500"
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
				</div>
				<div className="space-y-9 w-[400px]">
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="nickname">Nickname (optional)</Label>
						<Input
							value={nickname}
							id="nickname"
							type="text"
							className="border-solid border-gray-500"
							onChange={(e) => setNickname(e.target.value)}
						/>
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="role">Role</Label>
						<Input
							required
							value={role}
							id="role"
							type="text"
							className="border-solid border-gray-500"
							onChange={(e) => setRole(e.target.value)}
						/>
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="timezone">Timezone</Label>
						<Input
							required
							value={timezone}
							id="timezone"
							type="text"
							className="border-solid border-gray-500"
							onChange={(e) => setTimezone(e.target.value)}
						/>
					</div>
				</div>
			</div>
			<div className="w-3/5 m-auto">
				<Button className="w-full text-lg" size="lg">
					Register
				</Button>
				<div className="text-center mt-4">
					Have an account?{" "}
					<Link
						href="/api/auth/signin"
						className="text-blue-700 hover:underline"
					>
						Sign in
					</Link>
				</div>
			</div>
		</form>
	);
};
