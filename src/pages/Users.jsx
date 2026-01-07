import { useState, useEffect } from "react";
import TableSkeleton from "../components/TableSkeleton";
import { STATUS } from "../constants/status";
import { fetchUsers } from "../api/fakeApi";

const ITEMS_PER_PAGE = 8;

const Users = () => {
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);
	const [status, setStatus] = useState(STATUS.LOADING);
	const [mockUsers, setMockUsers] = useState([]);

	useEffect(() => {
		fetchUsers()
			.then((data) => {
				setMockUsers(data);
				setStatus(STATUS.SUCCESS);
			})
			.catch(() => setStatus(STATUS.FAILED));
	}, []);

	const filteredUsers = mockUsers.filter((user) =>
		user.name.toLowerCase().includes(search.toLowerCase())
	);

	const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

	const users = filteredUsers.slice(
		(page - 1) * ITEMS_PER_PAGE,
		page * ITEMS_PER_PAGE
	);

	const renderUsers = () => {
		if (status === STATUS.LOADING) {
			return <TableSkeleton />;
		}

		if (status === STATUS.SUCCESS) {
			return (
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
							{users.length ?
								(users.map((user) => (
									<tr key={user.id} className="border-b dark:border-gray-700 last:border-0">
										<td className="p-4 text-gray-900 dark:text-gray-100">{user.name}</td>
										<td className="p-4 text-gray-900 dark:text-gray-100">{user.email}</td>
										<td className="p-4 text-gray-900 dark:text-gray-100">{user.role}</td>
									</tr>
								)))
								: (<p className="text-gray-500 dark:text-gray-400 p-5">
									No users found.
								</p>)}
						</tbody>
					</table>
				</div>
			);
		}

		return (
			<p className="text-red-500">
				Failed to load users data.
			</p>
		);
	};


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
				className="
					w-full
					sm:w-64
					px-3
					py-2
					rounded-lg
					border
					border-gray-300
					bg-white
					text-gray-900
					placeholder-gray-400

					dark:border-gray-700
					dark:bg-gray-800
					dark:text-gray-100
					dark:placeholder-gray-500

					focus:outline-none
					focus:ring-2
					focus:ring-blue-500
				"
			/>

			{renderUsers()}

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
