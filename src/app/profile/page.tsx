"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { userUserStore } from "../../../stores/userStore";
import { trpc } from "../_trpc/client";
import User from "../../../stores/userInterface";
import { useRouter } from "next/navigation";

export default function Profile() {
	const { user, update } = userUserStore();
	console.log("user", user);
	const [id, setId] = useState(user?.id || "");
	const [firstName, setFirstName] = useState(user?.firstName || "");
	const [lastName, setLastName] = useState(user?.lastName || "");
	const [nickname, setNickname] = useState(user?.nickname || "");
	const [role, setRole] = useState(user?.role || "");
	const [timezone, setTimezone] = useState(user?.timezone || "");

	const mutation = trpc.updateUser.useMutation();
	const router = useRouter();

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const updatedUser = await mutation.mutateAsync({
				id,
				name: `${firstName} ${lastName}`,
				firstName,
				lastName,
				nickname,
				role,
				timezone,
			});
			update(updatedUser as User);
			router.push("/home");
		} catch (error) {
			console.error("Failed to update user:", error);
		}
	};

	return (
		<div className="h-screen w-screen flex justify-center items-center bg-slate-100">
			<div className="shadow-xl -mt-20 px-8 pb-8 pt-12 bg-white rounded-xl space-y-12">
				<h1 className="text-4xl font-bold">Profile</h1>
				<form onSubmit={onSubmit} className="space-y-10 w-[600px]">
					<div className="flex space-x-10">
						<div className="space-y-9 w-[400px]">
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
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor="nickname">Nickname</Label>
								<Input
									value={nickname}
									id="nickname"
									type="text"
									className="border-solid border-gray-500"
									onChange={(e) => setNickname(e.target.value)}
								/>
							</div>
						</div>
						<div className="space-y-9 w-[400px]">
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
					<div className="w-2/5 m-auto">
						<Button className="w-full text-lg" size="lg">
							Save
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
