import { DotsVerticalIcon, } from "@heroicons/react/outline";
import React from "react";

function Dropdown({ children }: { children: React.ReactNode }) {
  return (
    <div className="dropdown-end dropdown absolute  top-3 right-2 z-50 w-8">
      <label tabIndex={0} className="cursor-pointer pt-2 text-4xl">
        <DotsVerticalIcon className="text-4xl text-white " />
      </label>
      <div
        tabIndex={0}
        className="dropdown-content  rounded-box w-40 bg-white p-2 shadow"
      >
        
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
