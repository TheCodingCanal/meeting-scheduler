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
import { FiChevronDown } from "react-icons/fi";
import { signOut } from "next-auth/react";

export default function Header() {
	const router = useRouter();

	return (
		<div className="flex p-3 bg-gray-800 text-white">
			<div>OEE IntelliSuite Meeting Scheduler</div>
			<div className="absolute top-3 right-5">
				<DropdownMenu>
					<DropdownMenuTrigger className="flex items-center space-x-1">
						<span>Account Info</span>
						<FiChevronDown className="text-white" />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							className="cursor-pointer"
							onClick={() => router.push("/home")}
						>
							Home
						</DropdownMenuItem>
						<DropdownMenuItem
							className="cursor-pointer"
							onClick={() => router.push("/profile")}
						>
							Profile
						</DropdownMenuItem>
						<DropdownMenuItem
							className="cursor-pointer"
							onClick={() => signOut()}
						>
							Sign Out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
