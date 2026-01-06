import StatCard from "../components/StatCard";
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
	return (
		<div className="space-y-8">
			<h2 className="text-xl font-bold">
				Overview
			</h2>

			{/* Stats */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{stats.map((stat) => (
					<StatCard
						key={stat.title}
						title={stat.title}
						value={stat.value}
					/>
				))}
			</div>

			{/* Chart */}
			<div className="bg-white p-6 rounded-xl shadow-sm">
				<h3 className="font-semibold mb-4">
					Sales Overview
				</h3>

				<div className="h-64">
					<ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
						<LineChart data={salesData}>
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Line
								type="monotone"
								dataKey="sales"
								strokeWidth={2}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
