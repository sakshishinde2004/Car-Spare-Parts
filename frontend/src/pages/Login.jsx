import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/m2/users/login",
        {
          email: email,
          password: password,
        }
      );
      alert(response.data.message);
      if (response.data.success) {
        // Navigate to the dashboard or homepage
        navigate("/dashboard"); // Change "/dashboard" to your desired route
      }
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-700 to-gray-900 text-white">
      <h4 className="text-white text-3xl mb-4">Log In to Your Account</h4>
      <div className="bg-white rounded-lg p-8 shadow-lg w-11/12 max-w-md">
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <label htmlFor="email" className="text-gray-700 text-lg mb-2 block">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="text-black w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password Input */}
          <label
            htmlFor="password"
            className="text-gray-700 text-lg mb-2 block"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full text-black p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full p-3 bg-orange-500 text-white text-lg rounded hover:bg-orange-600 transition duration-300"
          >
            Log In
          </button>

          {/* Redirect to Signup */}
          <p className="mt-4 text-center text-gray-700">
            Do not have an account?
            <Link
              to="/signup"
              className="text-orange-500 font-bold hover:underline"
            >
              {" "}
              Sign Up
            </Link>
          </p>
 
            {/* forgot pass link */}
          <p className="mt-2 text-center">
            <Link
              to="/forgot-password"
              className="text-orange-500 font-bold hover:underline"
            >
              Forgot password?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
