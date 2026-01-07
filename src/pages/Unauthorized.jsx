import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-3xl font-bold text-red-500">403</h1>
      <h2 className="text-xl font-semibold">Access Denied</h2>
      <p className="text-gray-600 dark:text-gray-400">
        You don’t have permission to view this page.
      </p>

      <Link
        to="/"
        className="px-4 py-2 bg-black text-white rounded"
      >
        Go back to Dashboard
      </Link>
    </div>
  );
};

export default Unauthorized;
