"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function Header() {
	const router = useRouter();

	function navigate() {
		router.push("/profile");
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>Account Info</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={navigate}>Profile</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
