import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import React from "react";

function RootLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default RootLayout;
