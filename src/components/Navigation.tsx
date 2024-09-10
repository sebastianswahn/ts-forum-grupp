import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import { NavLink } from "react-router-dom";
export const Navigation = () => {
  return (
    <nav
      className="bg-emerald-600 py-4 pt-20 h-screen fixed opacity-0 scale-95 hover:opacity-100 hover:scale-100 duration-500 ease-in-out transition-opacity"
      style={{ position: "fixed", zIndex: 1000 }}
    >
      {" "}
      <div className="m-0 p-0 flex justify-between items-center w-full">
        <ul className="flex flex-col text-lg w-full">
          <NavLink
            className="text-white text-2xl hover:bg-emerald-700 px-4 py-4 "
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="text-white text-2xl hover:bg-emerald-700 px-4 py-4 "
            to="/my-posts"
          >
            My Posts
          </NavLink>
          <NavLink
            className="text-white text-2xl hover:bg-emerald-700 px-4 py-4 "
            to="/my-profile"
          >
            My Profile
          </NavLink>
          <NavLink
            className="text-white text-2xl hover:bg-emerald-700 px-4 py-4 "
            to="/create-thread"
          >
            Create Thread
          </NavLink>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
