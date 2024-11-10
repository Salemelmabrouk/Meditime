import React from "react";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white -mt-8">
      <div
        className="bg-white p-8 rounded-lg w-full max-w-md font-outfit"
        style={{
          boxShadow: "0px 20px 50px 0px #5F6FFF1A", // Custom shadow
          border: "1px solid #D4D4D4" // Custom border
        }}
      >
        <h2 className="text-2xl font-semibold text-[#4B5563]">Create Account</h2>
        <p className="mt-2 text-gray-600">Please sign up to book an appointment</p>
        
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-[#5F6FFF] text-white font-semibold rounded-lg hover:bg-[#5F6FFF]"
          >
            Create account
          </button>
        </form>
        
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-600 hover:underline">
            Login here
          </NavLink>
        </p>
      </div>
    </div>
  );
}
