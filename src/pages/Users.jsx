import { useState, useEffect, useMemo } from "react";
import TableSkeleton from "../components/TableSkeleton";
import { STATUS } from "../constants/status";
import { fetchUsers } from "../api/fakeApi";
import { useAsync } from "../hooks/useAsync";

const ITEMS_PER_PAGE = 8;

const Users = () => {
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);
	const usersAsync = useAsync(fetchUsers);
	const { run } = usersAsync;

	useEffect(() => {
		run();
	}, [run]);

	const filteredUsers = useMemo(() => {
		if (usersAsync.status !== STATUS.SUCCESS) return [];
		return usersAsync.data.filter((user) =>
			user.name.toLowerCase().includes(search.toLowerCase())
		);
	}, [usersAsync.status, usersAsync.data, search]);


	const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

	const users = filteredUsers.slice(
		(page - 1) * ITEMS_PER_PAGE,
		page * ITEMS_PER_PAGE
	);

	const renderUsers = () => {
		if (usersAsync.status === STATUS.LOADING) {
			return <TableSkeleton />;
		}

		if (usersAsync.status === STATUS.SUCCESS) {
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
								: (
									<tr>
										<td colSpan={3} className="p-4 text-center text-gray-500">
											No users found.
										</td>
									</tr>
								)}
						</tbody>
					</table>
				</div>
			);
		}

		return (
			<div className="col-span-full text-center space-y-2">
				<p className="text-red-500">
					Failed to load users data.
				</p>
				<button
					onClick={run}
					className="px-4 py-2 text-sm rounded-lg
          bg-blue-600 text-white
          hover:bg-blue-700"
				>
					Retry
				</button>
			</div>
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
			{totalPages > 1 && (
				<div className="flex gap-2">
					{Array.from({ length: totalPages }, (_, i) => (
						<button
							key={i}
							onClick={() => setPage(i + 1)}
							disabled={page === i + 1}
							className={`
							px-3 py-1 rounded border
							${page === i + 1 ? "bg-black text-white" : ""}
							disabled:opacity-50
						`}
						>
							{i + 1}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default Users;
