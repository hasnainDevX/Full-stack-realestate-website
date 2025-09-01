import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <nav className="h-[100px] flex space-between items-center !overflow-hidden " >
      <div className="left flex items-center flex-3 gap-[50px]">
        <Link
          to="/"
          className="logo text-lg flex items-center gap-[10px] font-bold transition-all duration-300 hover:scale-[1.05]"
        >
          <img
            src="/logo.png"
            alt="logo"
            className="w-7 !min-w-[28px] !block"
          />
          <span className="block !md:hiddden !lg:block">Realterzz</span>
        </Link>

        <Link
          className="text-xs sm:text-md md:text-lg transition-all duration-400 hover:scale-[1.05] sm:block hidden"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-xs sm:text-md md:text-lg transition-all duration-300 hover:scale-[1.05] sm:block hidden"
          to="/about"
        >
          About
        </Link>
        <Link
          className="text-xs sm:text-md md:text-lg transition-all duration-300 hover:scale-[1.05] sm:block hidden"
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className="text-xs sm:text-md md:text-lg transition-all duration-300 hover:scale-[1.05] sm:block hidden"
          to="/agents"
        >
          Agents
        </Link>
      </div>
      <div className="right h-full flex-2 flex items-center justify-end md:bg-[#fcf5f3] gap-2 bg-transparent">
        {currentUser ? (
          <div className="flex justify-center items-center gap-2">
            <img
              className="hidden sm:flex w-8 h-8 rounded-full object-cover border-2 border-yellow-400 shadow-sm"
              src={currentUser.avatar || "userimg.png"}
              alt="Profile"
            />
            <span className="hidden lg:flex">{currentUser.username}</span>
            <Link
              to="/profile"
              className="hidden sm:flex items-center gap-2 text-sm sm:text-base md:text-lg font-medium text-gray-700 hover:text-black hover:scale-[1.03] px-3 py-2 rounded-md transition-all duration-300"
            >
              <button className="hidden lg:inline-block text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded-md shadow-md transition-all duration-300">
                Profile
              </button>
            </Link>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="hidden md:inline-block text-sm font-medium text-gray-600 hover:text-black px-4 py-2 transition-all duration-300 hover:bg-gray-100 rounded-md"
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="hidden md:inline-block text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded-md shadow-md transition-all duration-300"
            >
              Sign Up
            </Link>
          </>
        )}

        <div className="menuicon sm:hidden block !z-50">
          <img
            onClick={() => setOpen(!open)}
            src="/menu.png"
            alt="menu"
            className="w-9 min-w-7 cursor-pointer"
          />
        </div>
        <div
          className={
            open
              ? "menu transition-all duration-700 ease-in flex flex-col justify-center items-center gap-2 text-xl fixed bg-black text-white h-[100dvh] w-1/2 top-0 right-0 z-40"
              : "menu transition-all duration-700 ease-in flex flex-col justify-center items-center gap-2 text-xl fixed bg-black text-white h-[100dvh] w-1/2 top-0 -right-full z-40"
          }
        >
          <Link className="p-1" to="/">
            Home
          </Link>
          <Link className="p-1" to="/about">
            About
          </Link>
          <Link className="p-1" to="/contact">
            Contact
          </Link>
          <Link className="p-1" to="/agents">
            Agents
          </Link>
          <Link className="p-1" to="/login">
            Login
          </Link>
          <Link className="p-1" to="/sign-up">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
