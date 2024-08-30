import React from 'react';

export default function SampleLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 text-purple-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8.25v7.5m3.75-3.75H8.25"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Sign in to your account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-purple-600" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-sm text-purple-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Sign in
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-4">Or continue with</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-200">
              <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" />
            </button>
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-200">
              <img src="https://img.icons8.com/ios-filled/24/000000/github.png" alt="GitHub" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
