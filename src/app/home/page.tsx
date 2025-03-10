import { prisma } from "@/lib/database";
import React from "react";
import { LogoutButton } from "../auth/auth";

export default async function HomePage() {
	const users = await prisma.user.findMany();
	const schedules = await prisma.schedule.findMany();
	const ifNeeded = await prisma.ifNeeded.findMany();
	return (
		<main>
			<h1>Users</h1>
			<ul>
				{users.map((users) => (
					<li key={users.id}>{users.firstName}</li>
				))}
			</ul>
			<h1>Schedules</h1>
			<ul>
				{schedules.map((schedule) => (
					<li key={schedule.id}>{schedule.monday}</li>
				))}
			</ul>
			<h1>IfNeeded</h1>
			<ul>
				{ifNeeded.map((ifNeeded) => (
					<li key={ifNeeded.id}>{ifNeeded.monday}</li>
				))}
			</ul>
			<LogoutButton />
		</main>
	);
}
