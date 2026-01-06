export const stats = [
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

export const salesData = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 450 },
  { name: "May", sales: 600 },
  { name: "Jun", sales: 700 },
];

export const users = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 3 === 0 ? "Admin" : "User",
}));
