const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const fetchDashboardStats = async () => {
	await delay(500);

	return [
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
	];
};

export const fetchDashboardSalesData = async () => {
	await delay(700);

	return [
		{ name: "Jan", sales: 400 },
		{ name: "Feb", sales: 300 },
		{ name: "Mar", sales: 500 },
		{ name: "Apr", sales: 450 },
		{ name: "May", sales: 600 },
		{ name: "Jun", sales: 700 },
	];
};

export const fetchUsers = async () => {
	await delay(1000);

	return [
		{ id: 1, name: "John Doe", email: "john@test.com", role: "user" },
		{ id: 2, name: "Jane Admin", email: "admin@test.com", role: "admin" },
	];
};
