import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { login, loading, user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigation("/");
  };

  if (user) {
    return (
      <div className="bg-gray-800 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full text-center">
            You have Already Have Account!!!
            <div className="text-grey-dark mt-6 ">
              Back to Home page
              <div>
                <Link
                  className="no-underline border-b border-blue text-blue"
                  to="/"
                >
                  HOME
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          onSubmit={handleLogin}
          className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
        >
          <h1 className="mb-8 text-3xl text-center">Log in</h1>

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            disabled={loading}
            type="submit"
            className="w-full text-center py-3 rounded text-white bg-gray-800 hover:bg-gray-600 focus:outline-none my-1"
          >
            Log In
          </button>
          <div className="text-grey-dark mt-6 text-center">
            Do not have an account?
            <div>
              <Link
                className="no-underline border-b border-blue text-blue"
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
