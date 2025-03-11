"use client";

import { useState } from "react";
import { trpc } from "@/app/_trpc/client";
import { serverClient } from "@/app/_trpc/serverClient";

export default function GetUsers({
	initialUsers,
}: {
	initialUsers: Awaited<ReturnType<(typeof serverClient)["getUsers"]["query"]>>;
}) {
	const {
		data: users,
		isLoading,
		isError,
		refetch,
	} = trpc.getUsers.useQuery(undefined, {
		initialData: initialUsers,
		refetchOnMount: false,
		refetchOnReconnect: false,
	});

	const [name, setName] = useState("");
	const [editName, setEditName] = useState("");
	const [editId, setEditId] = useState("");

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error loading users</div>;
	}

	return (
		<div>
			<div>
				{users?.map((user) => (
					<div key={user.id} className="flex gap-3 items-center">
						<span>{user.firstName}</span>
					</div>
				))}
			</div>
			<div className="flex gap-3 items-center">
				<label htmlFor="name">Name</label>
				<input
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="flex-grow text-black bg-white rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-4 py-2"
				/>
			</div>
			{editId && (
				<div className="flex gap-3 items-center">
					<label htmlFor="editName">Edit Name</label>
					<input
						id="editName"
						value={editName}
						onChange={(e) => setEditName(e.target.value)}
						className="flex-grow text-black bg-white rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-4 py-2"
					/>
				</div>
			)}
		</div>
	);
}
