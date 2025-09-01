import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Navigate } from "react-router-dom";

function Layout() {
  return (
    <div className="layout min-h-screen
      mx-auto 
      px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
      max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1920px]
      overflow-x-hidden 
      flex flex-col">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <div className="layout min-h-screen
      mx-auto 
      px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
      max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1920px]
      overflow-x-hidden 
      flex flex-col">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    );
  }
}

export { Layout, RequireAuth };
