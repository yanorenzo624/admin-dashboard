import { ROLES } from "../constants/roles";

const simulate = (data, failRate = 0.2, delay = 800) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			Math.random() < failRate
				? reject(new Error("API Error"))
				: resolve(data);
		}, delay);
	});

export const fetchDashboardStats = () => {
	return simulate([
		{
			title: "Users",
			value: "1,245",
		},
		{
			title: "Orders",
			value: "856",
		},
		{
			title: "Revenue",
			value: "$12,430",
		},
		{
			title: "Growth",
			value: "+12%",
		},
	]);
};

export const fetchDashboardSalesData = () => {
	return simulate([
		{ name: "Jan", sales: 400 },
		{ name: "Feb", sales: 300 },
		{ name: "Mar", sales: 500 },
		{ name: "Apr", sales: 450 },
		{ name: "May", sales: 600 },
		{ name: "Jun", sales: 700 },
	]);
};

export const fetchUsers = () => {
	const users = Array.from({ length: 42 }, (_, i) => ({
		id: i + 1,
		name: `User ${i + 1}`,
		email: `user${i + 1}@example.com`,
		role: i % 3 === 0 ? ROLES.ADMIN : ROLES.USER,
	}));

	return simulate(users);
};
