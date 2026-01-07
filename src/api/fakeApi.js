const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const fetchDashboardStats = async () => {
  await delay(1500);

  return {
    users: 120,
    revenue: 5400,
    orders: 86,
  };
};

export const fetchUsers = async () => {
  await delay(1800);

  return [
    { id: 1, name: "John Doe", email: "john@test.com", role: "user" },
    { id: 2, name: "Jane Admin", email: "admin@test.com", role: "admin" },
  ];
};
