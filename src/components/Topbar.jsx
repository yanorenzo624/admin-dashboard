import { useTheme } from "../context/ThemeContext";

const Topbar = () => {
  const { dark, setDark } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 border-b px-6 py-4 flex justify-between">
      <h1 className="font-semibold dark:text-white">
        Dashboard
      </h1>

      <button
        onClick={() => setDark(!dark)}
        className="text-sm px-3 py-1 border rounded dark:text-white"
      >
        {dark ? "Light" : "Dark"}
      </button>
    </header>
  );
};

export default Topbar;
