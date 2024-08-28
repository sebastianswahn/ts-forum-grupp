import React from "react";

function NavTrigger() {
  return (
    <div>
      {" "}
      <div
        className="absolute z-auto w-12 h-12 text-white rounded-md bg-emerald-500 align-middle text-center"
        style={{ top: "4%", left: "5%", transform: "translate(-50%, -50%)" }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="square"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default NavTrigger;
