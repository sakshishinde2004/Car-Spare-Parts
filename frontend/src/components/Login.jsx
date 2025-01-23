import React from "react";
import sampleImage from "../images/login-img.jpeg";
import logo from "../images/google-logo.webp";

function App() {
  return (
    <>
      <div className="h-screen bg-gray-50 flex items-center justify-center bg-gradient-to-b from-purple-200 to-red-300">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg grid grid-cols-2 overflow-hidden">
          <div className="p-10">
            {/* Logo */}
            <div className="mb-8 flex items-center justify-center">
              <img src={logo} alt="Google Logo" className="h-12 w-auto" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome back</h1>
            <p className="text-gray-500 mt-2">Please enter your details</p>
            <form className="mt-6">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <span className="ml-2">Remember for 30 days</span>
                </label>
                <a href="#" className="text-sm text-purple-600 hover:underline">
                  Forgot password
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white p-3 rounded-lg font-medium hover:bg-purple-700"
              >
                Sign in
              </button>
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="w-full h-px bg-gray-300"></div>
                <p className="text-sm text-gray-500">OR</p>
                <div className="w-full h-px bg-gray-300"></div>
              </div>
              <button
                type="button"
                className="w-full mt-4 flex items-center justify-center gap-2 border border-gray-300 text-gray-600 p-3 rounded-lg hover:bg-gray-50"
              >
                <img
                  src={logo}
                  alt="Google"
                  className="h-5 w-5"
                />
                Sign in with Google
              </button>
            </form>
            <p className="text-center text-sm text-gray-500 mt-6">
              {" "}
              Do not have an account?{" "}
              <a href="#" className="text-purple-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>

          <div className="bg-purple-100 flex items-center justify-center">
            <div className="max-w-sm">
              <img
                src={sampleImage}
                alt="Sample"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
