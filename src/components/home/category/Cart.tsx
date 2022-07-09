import React from "react";
import { Link } from "react-router-dom";
import Action from "./Action";

function CartCategory({ id, text }: { id: number; text: string }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" h-72  w-full  overflow-hidden  "
    >
      <Action categoryId={id} />
      <Link
        className="flex flex-col cart h-full w-full  gap-2   dark:bg-Shark dark:text-white dark:shadow-none  "
        to={`/Categories/${id}`}
      >
        <img
          className="  relative aspect-square h-4/5 w-full p-2 rounded-3xl object-cover dark:shadow-none "
          src={`https://picsum.photos/id/${id}/400/200`}
          alt="img"
        />

        <h1 className="center text-lg font-bold ">{text}</h1>
      </Link>
    </div>
  );
}

export default CartCategory;
