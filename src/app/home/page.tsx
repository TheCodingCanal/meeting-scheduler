import { prisma } from "@/lib/database";
import { LogoutButton } from "../auth/auth";
import GetUsers from "@/components/getUsers";
import { serverClient } from "../_trpc/serverClient";

export default async function HomePage() {
	const users = await serverClient.getUsers.query();
	return (
		<main>
			<GetUsers initialUsers={users} />
			<LogoutButton />
		</main>
	);
}
