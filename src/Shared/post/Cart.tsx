import { ICartPost } from "interfaces";
import React from "react";
import CartBtn from "./Btn";

// import CartBtn from "./CartBtn";



function CartPost({ id, body, word, meaning, categoryId }: ICartPost) {
  return (
    <div
      data-aos="zoom-in-up"
      className=" dark:shadow-cart-dark dark:hover:shadow-cart-dark-hover cart group min-h-max "
    >
      <div className="h-52 w-full p-2">
        <img
          className="relative aspect-square h-full  w-full  rounded-lg object-cover  object-center  "
          loading="lazy"
          src={`https://picsum.photos/id/${id}/534/200`}
          alt="avatar"
        />
      </div>
      <CartBtn value={word} />

      <div className=" absolute inline-block translate-x-6 -translate-y-9 cursor-pointer items-center rounded-xl   bg-slate-50  px-6 py-3 shadow-md shadow-slate-200/70 dark:bg-[#272727db] dark:shadow-slate-900">
        <h1 className="mx-3 inline-block text-lg font-semibold text-gray-500  dark:text-gray-300 ">
          {word}
        </h1>
      </div>

      <div className="px-6 py-4  font-bold text-gray-500/90">
        {/* <p className="py-2 text-lg selection:bg-sky-300 selection:text-white">
          {meaning}
        </p> */}
        <p className="py-2  selection:bg-sky-300 selection:text-white">
          {body}
        </p>
      </div>
    </div>
  );
}

export default CartPost;
