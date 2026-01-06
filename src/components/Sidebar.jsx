import { NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<aside className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 hidden md:block">
			<div className="p-6 font-bold text-lg text-gray-900 dark:text-white">
				Admin Panel
			</div>

			<nav className="px-4 space-y-2">
				<NavLink
					to="/"
					className="block px-4 py-2 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
				>
					Dashboard
				</NavLink>

				<NavLink
					to="/users"
					className="block px-4 py-2 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
				>
					Users
				</NavLink>

				<NavLink
					to="/settings"
					className="block px-4 py-2 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
				>
					Settings
				</NavLink>
			</nav>
		</aside>
	);
};

export default Sidebar;
