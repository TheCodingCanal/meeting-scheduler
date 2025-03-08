import { prisma } from "@/lib/database";
import { hash } from "bcrypt";

export async function POST(req: Request) {
	const { email, password, firstName, lastName, nickname, role, timezone } =
		await req.json();
	if (!email || !password || !firstName || !lastName || !role || !timezone) {
		return new Response("All information besides a nickname is required", {
			status: 400,
		});
	}

	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (user) {
		return new Response("User already exists", {
			status: 400,
		});
	}

	const hashedPassword = await hash(password, 12);

	await prisma.user.create({
		data: {
			email,
			password: hashedPassword,
			firstName,
			lastName,
			nickname,
			role,
			timezone,
		},
	});

	return new Response("User created", {
		status: 201,
	});
}
