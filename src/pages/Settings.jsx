import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Settings = () => {
	const { dark, setDark } = useTheme();
	const [name, setName] = useState("John Doe");
	const [email, setEmail] = useState("john@example.com");

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Profile settings saved!");
	};

	return (
		<div className="max-w-3xl space-y-8">
			<h2 className="text-xl font-bold text-gray-900 dark:text-white">
				Settings
			</h2>

			{/* Profile Settings */}
			<form
				onSubmit={handleSubmit}
				className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm space-y-4"
			>
				<h3 className="font-semibold text-gray-900 dark:text-white">
					Profile Settings
				</h3>

				<div>
					<label className="block text-sm mb-1 text-gray-600 dark:text-gray-400">
						Name
					</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					/>
				</div>

				<div>
					<label className="block text-sm mb-1 text-gray-600 dark:text-gray-400">
						Email
					</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					/>
				</div>

				<button
					type="submit"
					className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded"
				>
					Save Changes
				</button>
			</form>

			{/* Theme Preferences */}
			<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm space-y-4">
				<h3 className="font-semibold text-gray-900 dark:text-white">
					Theme Preferences
				</h3>

				<div className="flex items-center justify-between">
					<span className="text-gray-700 dark:text-gray-300">
						Dark Mode
					</span>

					<button
						onClick={() => setDark(!dark)}
						className={`w-12 h-6 flex items-center rounded-full p-1 transition
        ${dark ? "bg-black" : "bg-gray-300"}`}
					>
						<span
							className={`bg-white w-4 h-4 rounded-full transform transition
          ${dark ? "translate-x-6" : "translate-x-0"}`}
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Settings;
