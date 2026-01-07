import { createContext, useContext, useState } from "react";
import { ROLES } from "../constants/roles";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user");

  const [user, setUser] = useState(
    storedUser ? JSON.parse(storedUser) : null
  );

  const login = (email) => {
    const userData = {
      email,
      name: "Admin User",
      role: email.includes("admin") ? ROLES.ADMIN : ROLES.USER,
    };

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const updateProfile = (updates) => {
    setUser((prev) => {
      const updatedUser = { ...prev, ...updates };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
