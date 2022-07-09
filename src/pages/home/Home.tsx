import Nav from "components/home/nav";
import React from "react";
import Sidebar from "components/home/sidebar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="">
      <div className="  flex min-h-screen bg-slate-200    dark:bg-[#1b202d]  ">
        <Sidebar />
        <div className=" mx-5  w-full lg:w-[85%] xl:w-[87%]">
          <Nav />
          <div className=" mt-3  mb-4 grid  min-h-[86.5vh] w-full gap-6 rounded-xl bg-slate-100 p-6 shadow-sm dark:bg-American-Blue  sm:grid-cols-2 lg:grid-cols-3  ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
