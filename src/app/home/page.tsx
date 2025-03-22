import { prisma } from "@/lib/database";
import { LogoutButton } from "../auth/auth";
import GetUser from "@/components/getUser";
import { serverClient } from "../_trpc/serverClient";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function HomePage() {
	const session = await getServerSession(authOptions);
	const email = session?.user?.email;
	return (
		<main>
			<GetUser email={email || ""} />
			<LogoutButton />
		</main>
	);
}
