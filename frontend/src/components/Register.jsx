import React from 'react';
import illustration from '../images/register-img.jpeg';
import googleLogo from '../images/google-logo.webp';

export function Register() {
  return (
    <>
      <div className="h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg grid grid-cols-2 overflow-hidden">
          {/* Left Side - Illustration */}
          <div className="bg-purple-100 flex items-center justify-center">
            <div className="max-w-sm">
              <img
                src={illustration}
                alt="Illustration"
                className="w-full"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-xs">
              <h1 className="text-3xl font-bold text-gray-800">
                Create account
              </h1>

              <form className="mt-4">
                {/* Full Name Field */}
                <div className="mb-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full mt-3 p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full mt-3 p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password Field */}
                <div className="mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full mt-3 p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white p-3 rounded-lg font-medium hover:bg-purple-700"
                >
                  Sign up
                </button>

                {/* Divider */}
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="w-full h-px bg-gray-300"></div>
                  <p className="text-sm text-gray-500">OR</p>
                  <div className="w-full h-px bg-gray-300"></div>
                </div>

                {/* Google Sign Up */}
                <button
                  type="button"
                  className="w-full mt-5 flex items-center justify-center gap-2 border border-gray-300 text-gray-600 p-3 rounded-lg hover:bg-gray-50"
                >
                  <img
                    src={googleLogo}
                    alt="Google"
                    className="h-5 w-5"
                  />
                  Sign up with Google
                </button>
              </form>

              {/* Sign In Link */}
              <p className="text-center text-sm text-gray-500 mt-6">
                Already have an account?{' '}
                <a href="#" className="text-purple-600 hover:underline">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;