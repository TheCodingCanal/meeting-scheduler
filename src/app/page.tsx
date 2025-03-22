import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { LoginButton } from "./auth/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
	return (
		<main className="flex items-center justify-center h-screen w-screen bg-slate-100">
			<div className="bg-white shadow-xl rounded-lg p-6 max-w-md w-full -mt-40 transform scale-150">
				<div className="mb-4">
					<h2 className="text-5xl font-bold text-center p-5">Scheduler</h2>
				</div>
				<div className="flex justify-center space-x-6">
					<LoginButton />
					<Button size="lg">
						<Link className="text-lg" href="/register">
							Sign Up
						</Link>
					</Button>
				</div>
			</div>
		</main>
	);
}
