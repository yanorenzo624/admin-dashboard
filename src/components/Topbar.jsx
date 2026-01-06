import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

const Topbar = () => {
	const { dark, setDark } = useTheme();
	const { logout } = useAuth();

	return (
		<header className="bg-white dark:bg-gray-900 border-b px-6 py-4 flex justify-between">
			<h1 className="font-semibold dark:text-white">
				Dashboard
			</h1>

			<div className="flex gap-2">
				<button
					onClick={() => setDark(!dark)}
					className="text-sm px-3 py-1 border rounded dark:text-white"
				>
					{dark ? "Light" : "Dark"}
				</button>
				<button
					onClick={logout}
					className="text-sm px-3 py-1 rounded bg-red-500 text-white"
				>
					Logout
				</button>
			</div>
		</header>
	);
};

export default Topbar;
