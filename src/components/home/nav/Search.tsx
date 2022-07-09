import { SearchIcon } from "@heroicons/react/outline";
import React from "react";

function Search({ className }: { className?: string }) {
    return (
      <div className={`${className}  dark:bg-transparent border-gray-500 dark:border-2 rounded-2xl  md:center hidden `}>
        <SearchIcon className="onClick h-full w-7  cursor-pointer object-cover py-1 text-gray-400 dark:text-white" />
        <input
          type="text"
          name="search"
          id="search"
          className=" h-full w-36 bg-transparent pl-3 font-bold outline-none focus:border-none dark:text-white "
          placeholder="search..."
        />
      </div>
    );
}

export default Search;
