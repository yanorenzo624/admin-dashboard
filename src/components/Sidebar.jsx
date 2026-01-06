import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r hidden md:block">
      <div className="p-6 font-bold text-lg">
        Admin Panel
      </div>

      <nav className="px-4 space-y-2">
        <NavLink
          to="/"
          className="block px-4 py-2 rounded hover:bg-gray-100"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/users"
          className="block px-4 py-2 rounded hover:bg-gray-100"
        >
          Users
        </NavLink>

        <NavLink
          to="/settings"
          className="block px-4 py-2 rounded hover:bg-gray-100"
        >
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
