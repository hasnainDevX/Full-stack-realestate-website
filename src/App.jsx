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
    <div className="max-w-[1366px] h-auto !mx-auto md:px-20 lg:max-w-[1288px] md:max-w-[768px] sm:max-w-[640px] px-10 overflow-x-hidden flex flex-col">
      <div className="navbar">
        <Navbar />
      </div>
      {/* <div className="content flex-1"> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/list/:id" element={<SinglePage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/profile" element={<ProfilePage />} />

          {/* Catch all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </div> */}
    </div>
  );
};

export default App;
