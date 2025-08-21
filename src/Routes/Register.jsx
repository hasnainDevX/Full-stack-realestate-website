import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import apiRequest from "../lib/apiRequest";

const Register = () => {
  const [error, seterror] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    seterror("");
    
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(username, email, password);

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      navigate("/login")
    } catch(err) {
      seterror(err.response.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-100px)]">
      {/* Form Section */}
      <div className="flex flex-[3] items-center justify-center">
        <form
          onSubmit={handlesubmit}
          className="flex flex-col gap-4 w-[80%] max-w-md"
        >
          <h1 className="text-2xl font-bold">Create an Account</h1>
          <input
            name="username"
            type="text"
            minLength={3}
            maxLength={20}
            placeholder="Username"
            className="p-4 border border-gray-400 rounded-md"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="p-4 border border-gray-400 rounded-md"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="p-4 border border-gray-400 rounded-md"
            required
            minLength={6}
            maxLength={20}
          />
          {error && <span className="text-red-500">{error}</span>}
          <button 
            disabled={loading}
            className="p-4 rounded-md bg-teal-600 text-white font-bold cursor-pointer hover:bg-teal-700 disabled:bg-[#bed9d8] disabled:cursor-not-allowed"
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <Link
            to="/login"
            className="text-gray-500 text-sm border-b border-gray-400 w-max"
          >
            Do you have an account?
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

export default Register;