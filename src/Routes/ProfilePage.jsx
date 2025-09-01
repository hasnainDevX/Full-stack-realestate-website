import Chat from "../Components/Chat";
import Profilelist from "../Components/MyprofileList";
import React, { useEffect } from "react";
import apiRequest from "../lib/apiRequest";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function ProfilePage() {
  const { currentUser,updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async ()=> {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null)
      navigate("/login")
    } catch (err) {
      console.log(err);
      navigate("/login")
    }
  }
  return (
    <div className="flex lg:h-[calc(100vh-100px)] profilePage flex-col lg:flex-row">
      <div className="flex-none md:flex-[3] md:overflow-y-scroll md:pb-[50px] details">
        <div className="flex flex-col gap-[35px] md:pr-[50px] wrapper">
          <div className="flex items-center justify-between title ">
            <h1 className="font-semibold text-3xl">User Information</h1>
            <Link to="/profile/update">
            <button className="px-4 py-2 bg-[#fece51] cursor-pointer border-none">Update Profile</button>
            </Link>
          </div>
          <div className="flex flex-col gap-3 info">
            <span className="flex items-center gap-[20px]">
              Avatar:
              <img
                className="w-[40px] h-[40px] rounded-full object-cover"
                src={currentUser.avatar || "userimg.png"}
                alt=""
              />
            </span>
            <span className="flex items-center gap-[20px]">
              Username: <b>{currentUser.username}</b>
            </span>
            <span className="flex items-center gap-[20px]">
              E-mail: <b>{currentUser.email}</b>
            </span>
          <button onClick={handleLogout} className="px-4 py-2 max-w-[100px] bg-[#fece51] cursor-pointer border-none">Logout</button>
          </div>
          <div className="flex items-center justify-between title">
            <h1 className="font-semibold text-3xl">My List</h1>
            <Link to="/create-post">
            <button className="px-4 py-2 bg-[#fece51] cursor-pointer border-none">Create New Post</button>
            </Link>
          </div>
          <Profilelist />
          <div className="title">
            <h1 className="font-light text-4xl">Saved List</h1>
          </div>
          <Profilelist />
        </div>
      </div>
      <div className="flex-none md:flex-[2] bg-[#fcf5f3] lg:overflow-y-auto chatContainer">
        <div className="h-full px-5 py-0 md:py-2 wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
