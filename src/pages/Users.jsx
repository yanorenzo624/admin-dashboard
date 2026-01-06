import { useState } from "react";
import { users as mockUsers } from "../data/mockData";

const ITEMS_PER_PAGE = 8;

const Users = () => {
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);

	const filteredUsers = mockUsers.filter((user) =>
		user.name.toLowerCase().includes(search.toLowerCase())
	);

	const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

	const users = filteredUsers.slice(
		(page - 1) * ITEMS_PER_PAGE,
		page * ITEMS_PER_PAGE
	);

	return (
		<div className="space-y-6">
			<h2 className="text-xl font-bold">Users</h2>

			<input
				type="text"
				placeholder="Search users..."
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
					setPage(1);
				}}
				className="p-3 border rounded-lg w-full sm:w-64"
			/>

			<div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm">
				<table className="w-full text-left">
					<thead className="border-b dark:border-gray-700">
						<tr>
							<th className="p-4">Name</th>
							<th className="p-4">Email</th>
							<th className="p-4">Role</th>
						</tr>
					</thead>

					<tbody>
						{users.map((user) => (
							<tr key={user.id} className="border-b dark:border-gray-700 last:border-0">
								<td className="p-4 text-gray-900 dark:text-gray-100">{user.name}</td>
								<td className="p-4 text-gray-900 dark:text-gray-100">{user.email}</td>
								<td className="p-4 text-gray-900 dark:text-gray-100">{user.role}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Pagination */}
			<div className="flex gap-2">
				{Array.from({ length: totalPages }, (_, i) => (
					<button
						key={i}
						onClick={() => setPage(i + 1)}
						className={`px-3 py-1 rounded border ${page === i + 1 ? "bg-black text-white" : ""
							}`}
					>
						{i + 1}
					</button>
				))}
			</div>
		</div>
	);
};

export default Users;
