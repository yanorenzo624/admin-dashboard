import { useState, useEffect } from "react";
import ChartSkeleton from "../components/ChartSkeleton";
import StatCard from "../components/StatCard";
import StatSkeleton from "../components/StatSkeleton";
import { stats, salesData } from "../data/mockData";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
	const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate API call
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

	return (
		<div className="space-y-8">
			<h2 className="text-xl font-bold">
				Overview
			</h2>

			{/* Stats */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{loading
					? Array.from({ length: 4 }).map((_, i) => (
						<StatSkeleton key={i} />
					))
					: stats.map((stat) => (
						<StatCard key={stat.title} {...stat} />
					))}
			</div>

			{/* Chart */}
			{loading ? (
				<ChartSkeleton />
			) : (
				<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
					<h3 className="font-semibold mb-4 dark:text-white">
						Sales Overview
					</h3>

					<div className="h-64">
						<ResponsiveContainer width="100%" height="100%">
							<LineChart data={salesData}>
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Line type="monotone" dataKey="sales" strokeWidth={2} />
							</LineChart>
						</ResponsiveContainer>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
