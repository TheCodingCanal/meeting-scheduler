import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
	const password = await hash("test", 12);
	const user = await prisma.user.upsert({
		where: { email: "test@test.com" },
		update: {},
		create: {
			id: "1",
			email: "test@test.com",
			password,
			role: "Full Stack Developer",
			timezone: "EST",
			name: "Test User",
			firstName: "Test",
			lastName: "User",
			nickname: "",
		},
	});
	const schedule = await prisma.schedule.upsert({
		where: { id: "1" },
		update: {},
		create: {
			id: "1",
			sunday: "9-5",
			monday: "9-5",
			tuesday: "9-5",
			wednesday: "9-5",
			thursday: "9-5",
			friday: "9-5",
			saturday: "9-5",
			author: {
				connect: { id: user.id },
			},
		},
	});
	const IfNeeded = await prisma.ifNeeded.upsert({
		where: { id: "1" },
		update: {},
		create: {
			id: "1",
			sunday: "9-5",
			monday: "9-5",
			tuesday: "9-5",
			wednesday: "9-5",
			thursday: "9-5",
			friday: "9-5",
			saturday: "9-5",
			author: {
				connect: { id: user.id },
			},
		},
	});
	console.log({ user });
	console.log({ schedule });
	console.log({ IfNeeded });
}
main()
	.then(() => prisma.$disconnect())
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
