import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import apiRequest from "../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../Components/UploadWidget";

function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });
      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="h-full flex">
      {/* Left form container */}
      <div className="flex-[3] flex items-center justify-center py-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center">Update Profile</h1>

          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="font-medium">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
              className="p-4 border border-gray-400 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
              className="p-4 border border-gray-400 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="p-4 border border-gray-400 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="p-4 rounded-md bg-teal-600 text-white font-bold cursor-pointer hover:bg-teal-700 transition"
          >
            Update
          </button>

          {error && <span className="text-red-500">{error}</span>}
        </form>
      </div>

      {/* Right side container */}
      <div className="flex-[2] bg-[#fcf5f3] flex flex-col gap-5 items-center justify-center">
        <img
          src={avatar[0] || currentUser.avatar || "/userimg.png"}
          alt="avatar"
          className="w-1/2 object-cover rounded-md"
        />
        {/* Uncomment when using UploadWidget */}
        <UploadWidget
          uwConfig={{
            cloudName: "dqkan4nnl",
            uploadPreset: "realestate1",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
