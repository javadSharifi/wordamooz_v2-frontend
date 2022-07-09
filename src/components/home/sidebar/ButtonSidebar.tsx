/* eslint-disable no-undef */
import { IButtonSidebar } from "interfaces";
import React from "react";

interface data {
  Icon: any;
  name: string;
  delay: string;
  onClick?: any;
}

export default function ButtonSidebar({ delay, Icon, name, onClick }: IButtonSidebar) {
  return (
    <button
      onClick={onClick}
      className=" onClick select-none hover:bg-gradient-info group flex w-10/12 cursor-pointer  flex-wrap gap-2  rounded-lg py-3  font-bold text-gray-500 transition-all duration-200 hover:font-bold hover:shadow-md     "
    >
      <Icon
        className=" ml-3 w-6     grayscale group-hover:text-white"
        data-aos="zoom-in"
        data-aos-delay={delay}
      />
      <h1
        className="group-hover:text-white"
        data-aos="zoom-in"
        data-aos-delay={delay}
      >
        {name}
      </h1>
    </button>
  );
}
