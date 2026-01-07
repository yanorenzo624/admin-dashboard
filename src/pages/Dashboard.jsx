import { useState, useEffect } from "react";
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


const Dashboard = () => {
	const { theme } = useTheme();
	const [state, setState] = useState({ stats: STATUS.LOADING, salesData: STATUS.LOADING });
	const [stats, setStats] = useState(null);
	const [salesData, setSalesData] = useState(null);

	const loadStats = (isMounted = true) => {
		setState((prev) => { return { ...prev, stats: STATUS.LOADING } });

		fetchDashboardStats()
			.then((data) => {
				if (isMounted) {
					setStats(data);
					setState((prev) => { return { ...prev, stats: STATUS.SUCCESS } });
				}
			})
			.catch(() => {
				if (isMounted) {
					setState((prev) => { return { ...prev, stats: STATUS.FAILED } })
				}
			});
	}

	useEffect(() => {
		let isMounted = true;

		loadStats(isMounted);

		return () => { isMounted = false; };
	}, []);

	const loadSalesData = (isMounted = true) => {
		setState((prev) => { return { ...prev, salesData: STATUS.LOADING } });

		fetchDashboardSalesData()
			.then((data) => {
				if (isMounted) {
					setSalesData(data);
					setState((prev) => { return { ...prev, salesData: STATUS.SUCCESS } });
				}
			})
			.catch(() => {
				if (isMounted) {
					setState((prev) => { return { ...prev, salesData: STATUS.FAILED } });
				}
			});
	}

	useEffect(() => {
		let isMounted = true;

		loadSalesData(isMounted);

		return () => { isMounted = false; };
	}, []);

	const renderStats = () => {
		if (state.stats === STATUS.LOADING)
			return Array.from({ length: 4 }).map((_, i) => <StatSkeleton key={i} />);

		if (state.stats === STATUS.SUCCESS && stats)
			return stats.map((stat) => <StatCard key={stat.title} {...stat} />);

		return (
			<div className="col-span-full text-center space-y-2">
				<p className="text-red-500">
					Failed to load stats data.
				</p>
				<button
					onClick={loadStats}
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
		if (state.salesData === STATUS.LOADING)
			return <ChartSkeleton />;

		if (state.salesData === STATUS.SUCCESS && salesData)
			return (
				<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
					<h3 className="font-semibold mb-4 dark:text-white">
						Sales Overview
					</h3>

					<div className="h-64">
						<ResponsiveContainer width="100%" height="100%">
							<LineChart data={salesData}>
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
					onClick={loadSalesData}
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
