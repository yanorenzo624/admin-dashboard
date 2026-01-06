import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { user, login } = useAuth();

	if (user) {
		return <Navigate to="/" replace />;
	}

  const handleSubmit = (e) => {
    e.preventDefault();

    // mock auth success
    login(email);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm w-80 space-y-4"
      >
        <h2 className="text-lg font-bold text-center text-gray-900 dark:text-white">
          Admin Login
        </h2>

        <div>
          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-400">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
