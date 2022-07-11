import Main from "components/AppLayout/Main";
import Navigation from "components/BottomNavigation/Navigation";
import Nav from "components/nav";
import Sidebar from "components/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

function AppLayouts() {
  return (
    <div className="   flex min-h-screen bg-slate-200    dark:bg-[#1b202d]  ">
      <Sidebar />
      <Navigation />
      <div className=" relative mx-2 w-full  md:mx-5 lg:w-[85%] xl:w-[87%]">
        <Nav />
        <Main>
          <Outlet />
        </Main>
      </div>
    </div>
  );
}

export default AppLayouts;
