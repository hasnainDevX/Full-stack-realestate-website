import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Routes/Homepage";
import ListPage from "./Routes/ListPage";
import NotFound from "./Routes/NotFound";
import SinglePage from "./Routes/SinglePage";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import ProfilePage from "./Routes/ProfilePage";
import { Layout, RequireAuth } from "./Routes/Layout"; 
import ProfileUpdatePage from "./Routes/ProfileUpdatePage";
import NewPostPage from "./Routes/NewPostPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Public layout with Navbar
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/list", element: <ListPage /> },
        { path: "/listing/:id", element: <SinglePage /> }, 
        { path: "/login", element: <Login /> },
        { path: "/sign-up", element: <Register /> },
        // NotFound fallback for public routes
        { path: "*", element: <NotFound /> },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        { path: "/profile", element: <ProfilePage /> },
        { path: "/profile/update", element: <ProfileUpdatePage /> },
        { path: "/create-post", element: <NewPostPage /> },

        // NotFound fallback for protected routes
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
