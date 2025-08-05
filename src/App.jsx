import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Routes/Homepage";
import ListPage from "./Routes/ListPage";
import NotFound from "./Routes/NotFound";
import SinglePage from "./Routes/SinglePage";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import ProfilePage from "./Routes/ProfilePage";

const App = () => {
  return (
    <div className="
      min-h-screen
      mx-auto 
      px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
      max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1920px]
      overflow-x-hidden 
      flex flex-col
    ">
      <div className="navbar">
        <Navbar />
      </div>
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/list/:id" element={<SinglePage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;