import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../lib/apiRequest";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      updateUser(res.data)

      navigate("/");
    } catch (err) {
      console.log("Login error:", err);
      
      // Better error handling
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else if (err.response && err.response.data) {
        // If data is a string
        setError(typeof err.response.data === 'string' ? err.response.data : "Login failed");
      } else if (err.response && err.response.status === 404) {
        setError("Login endpoint not found. Please check your backend.");
      } else if (err.message) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-100px)]">
      {/* Form Section */}
      <div className="flex flex-[3] items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-[80%] max-w-md"
        >
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="p-4 border border-gray-400 rounded-md"
            autoComplete="username"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="p-4 border border-gray-400 rounded-md"
            autoComplete="current-password"
            required
          />
          {error && (
            <span className="text-red-500 text-sm bg-red-50 p-2 rounded border border-red-200">
              {error}
            </span>
          )}
          <button 
            disabled={loading}
            className="p-4 rounded-md bg-teal-600 text-white font-bold cursor-pointer hover:bg-teal-700 disabled:bg-[#bed9d8] disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <Link
            to="/sign-up"
            className="text-gray-500 text-sm border-b border-gray-400 w-max"
          >
            Don't have an account?
          </Link>
        </form>
      </div>

      {/* Image Section */}
      <div className="flex flex-[2] bg-[#fcf5f3] items-center justify-center">
        {/* <img src="/bg.png" alt="" className="w-full" /> */}
      </div>
    </div>
  );
};

export default Login;