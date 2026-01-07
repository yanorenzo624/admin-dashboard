import { useEffect } from "react";
import ChartSkeleton from "../components/ChartSkeleton";
import StatCard from "../components/StatCard";
import StatSkeleton from "../components/StatSkeleton";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { fetchDashboardSalesData, fetchDashboardStats } from "../api/fakeApi";
import { useTheme } from "../context/ThemeContext";
import { STATUS } from "../constants/status";
import { useAsync } from "../hooks/useAsync";


const Dashboard = () => {
	const { theme } = useTheme();
	const statsAsync = useAsync(fetchDashboardStats);
	const salesAsync = useAsync(fetchDashboardSalesData);

	useEffect(() => {
		statsAsync.run();
		salesAsync.run();
	}, []);

	const renderStats = () => {
		if (statsAsync.status === STATUS.LOADING)
			return Array.from({ length: 4 }).map((_, i) => <StatSkeleton key={i} />);

		if (statsAsync.status === STATUS.SUCCESS && statsAsync.data)
			return statsAsync.data.map((stat) => <StatCard key={stat.title} {...stat} />);

		return (
			<div className="col-span-full text-center space-y-2">
				<p className="text-red-500">
					Failed to load stats data.
				</p>
				<button
					onClick={statsAsync.run}
					className="px-4 py-2 text-sm rounded-lg
          bg-blue-600 text-white
          hover:bg-blue-700"
				>
					Retry
				</button>
			</div>
		);
	};

	const renderChart = () => {
		if (salesAsync.status === STATUS.LOADING)
			return <ChartSkeleton />;

		if (salesAsync.status === STATUS.SUCCESS && salesAsync.data)
			return (
				<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
					<h3 className="font-semibold mb-4 dark:text-white">
						Sales Overview
					</h3>

					<div className="h-64">
						<ResponsiveContainer width="100%" height="100%">
							<LineChart data={salesAsync.data}>
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip
									labelStyle={{
										color: theme === "dark" ? "#9ca3af" : "#374151",
									}}
								/>
								<Line type="monotone" dataKey="sales" strokeWidth={2} stroke="#3b82f6" />
							</LineChart>
						</ResponsiveContainer>
					</div>
				</div>
			);

		return (
			<div className="text-center space-y-2">
				<p className="text-red-500">
					Failed to load sales data.
				</p>
				<button
					onClick={salesAsync.run}
					className="px-4 py-2 text-sm rounded-lg
						bg-blue-600 text-white
						hover:bg-blue-700"
				>
					Retry
				</button>
			</div>
		);
	}

	return (
		<div className="space-y-8">
			<h2 className="text-xl font-bold">
				Overview
			</h2>

			{/* Stats */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{renderStats()}
			</div>

			{/* Chart */}
			{renderChart()}
		</div>
	);
};

export default Dashboard;
