import { OpenModal } from "components/Modal";
import React from "react";
import { useParams } from "react-router-dom";
import Search from "components/home/nav/Search";
import Avatar from "./Avatar";

function Nav() {
  let params = useParams();
  const title = !params.idCategories ? "Category" : "Post";
  return (
    <div
      data-aos="fade-down"
      data-aos-delay="200"
      data-aos-duration="1000"
      className="  z-50  mt-4 flex  h-14   w-full rounded-xl bg-slate-100 shadow-lg shadow-gray-300/50  "
    >
      <div className="ml-10 w-1/3 self-center text-2xl font-bold ">{title}</div>
      <div className="mx-3 my-2 flex w-2/3 flex-row-reverse flex-wrap items-center  gap-4 ">
        <Avatar />
        <OpenModal
          className="onClick center h-full px-5 shadow-md "
          name={title}
        >
          create
        </OpenModal>
        <Search className="h-full w-48 rounded-lg bg-slate-300/60 shadow-sm" />
      </div>
    </div>
  );
}

export default Nav;
