import { SearchIcon } from "@heroicons/react/outline";
import React from "react";

function Search({ className }: { className?: string }) {
    return (
      <div className={`${className}  md:center hidden `}>
        <SearchIcon className="onClick h-full  w-7 cursor-pointer object-cover py-1 text-gray-400" />
        <input
          type="text"
          name="search"
          id="search"
          className=" h-full w-36 bg-transparent pl-3 font-bold outline-none focus:border-none "
          placeholder="search..."
        />
      </div>
    );
}

export default Search;
