import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";
import MyPosts from "./pages/MyPosts";
import MyProfile from "./pages/MyProfile";

import "tailwindcss/tailwind.css";
import React from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/my-posts",
          element: <MyPosts />,
        },
        {
          path: "/my-profile",
          element: <MyProfile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
