import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="h-[100px] flex space-between items-center overflow-hidden">
      <div className="left flex items-center flex-3 gap-[50px]">
          <a
            href="/"
            className="logo text-lg flex items-center gap-[10px] font-bold transition-all duration-300 hover:scale-[1.05]"
          >
            <img src="/logo.png" alt="logo" className="w-7 !min-w-[28px] !block" />
            <span className="block !md:hiddden !lg:block">Realterzz</span>
          </a>

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
        <Link
          to="/login"
          className="md:block hidden px-3 py-2 m-2 rounded"
        >
          Login
        </Link>
        <Link
          to="/sign-up"
          className="bg-yellow-400 md:block hidden !px-3 !py-2 m-4 text-white rounded"
        >
          Sign Up
        </Link>
        <div className="menuicon sm:hidden block !z-50">
          <img onClick={()=> setOpen(!open)} src="/menu.png" alt="menu" className="w-9 min-w-7 cursor-pointer" />
        </div>
        <div className={open ? 
          "menu transition-all duration-700 ease-in flex flex-col justify-center items-center gap-2 text-xl fixed bg-black text-white h-[100dvh] w-1/2 top-0 right-0 z-40" : 
          "menu transition-all duration-700 ease-in flex flex-col justify-center items-center gap-2 text-xl fixed bg-black text-white h-[100dvh] w-1/2 top-0 -right-full z-40"
        }>
          <Link className="p-1" to="/">Home</Link>
          <Link className="p-1" to="/about">About</Link>
          <Link className="p-1" to="/contact">Contact</Link>
          <Link className="p-1" to="/agents">Agents</Link>
          <Link className="p-1" to="/login">Login</Link>
          <Link className="p-1" to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;