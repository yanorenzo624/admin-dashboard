const StatCard = ({ title, value }) => {
	return (
		<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
			<p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
				{title}
			</p>
			<p className="text-2xl font-bold text-gray-900 dark:text-white">
				{value}
			</p>
		</div>
	);
};

export default StatCard;
