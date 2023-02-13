import React, { createContext, useState, useEffect } from "react";
import authAPI from "../api/auth";

const AuthContext = createContext({
  user: null,
  error: null,
  isLoading: false,
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    const user = localStorage.getItem("user");

    if (jwt && user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const login = async (email, password, callback) => {
    setLoading(true);
    try {
      const data = await authAPI.login(email, password);
      setUser(data.user);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authAPI.logout();
    setUser(null);
  };

  const register = async (username, email, password, fullname, callback) => {
    setLoading(true);
    try {
      const data = await authAPI.register(username, email, password, fullname);
      setUser(data.user);
      setError(null);
      callback();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, error, loading, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
