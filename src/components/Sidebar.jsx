import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ROLES } from "../constants/roles";

const Sidebar = () => {
	const { user } = useAuth();

	const navItems = [
		{ label: "Dashboard", path: "/" },
		{ label: "Users", path: "/users", roles: [ROLES.ADMIN] },
		{ label: "Settings", path: "/settings" },
	];

	return (
		<aside className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 hidden md:block">
			<div className="p-6 font-bold text-lg text-gray-900 dark:text-white">
				Admin Panel
			</div>

			<nav className="px-4 space-y-2">
				{navItems.map((item) => {
					if (item.roles && !item.roles.includes(user?.role)) return null;

					return (
						<NavLink 
							key={item.path} 
							to={item.path} 
							className="block px-4 py-2 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
							{item.label}
						</NavLink>
					);
				})}
			</nav>
		</aside>
	);
};

export default Sidebar;
