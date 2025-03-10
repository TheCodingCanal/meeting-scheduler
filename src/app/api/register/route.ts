import { prisma } from "@/lib/database";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { email, password, firstName, lastName, nickname, role, timezone } =
			await req.json();

		const hashedPassword = await hash(password, 12);

		const user = await prisma.user.create({
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

		return NextResponse.json({
			user: {
				email: user.email,
			},
		});
	} catch (error: any) {
		return NextResponse.json({ error: "User already exists" }, { status: 500 });
	}
}
