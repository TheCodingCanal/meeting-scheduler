import { getServerSession } from "next-auth";
import HomeClient from "./homeClient";
import { authOptions } from "@/lib/auth";

export default async function HomePage() {
	const session = await getServerSession(authOptions);

	if (!session) {
		// You might redirect to a login page or render a message
		return <p>No session found. Please log in.</p>;
	}

	// Pass the session to your client component as a prop
	return <HomeClient session={session} />;
}
