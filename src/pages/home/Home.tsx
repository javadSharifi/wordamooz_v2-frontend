import Nav from "components/home/nav";
import React from "react";
import Sidebar from "components/home/sidebar";
import { Outlet } from "react-router-dom";

function Home() {

  return (
    <div className="  flex min-h-screen   bg-slate-200  ">
      <Sidebar />
      <div className=" mx-5  w-full lg:w-[85%] xl:w-[87%]">
        <Nav />
        <div className=" w-full  min-h-[86.5vh] shadow-sm  mt-3 mb-4 bg-slate-100 rounded-xl grid lg:grid-cols-3 sm:grid-cols-2  p-6 gap-6  ">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Home;
