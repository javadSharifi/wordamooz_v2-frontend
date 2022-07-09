/* eslint-disable no-unused-vars */
import Logo from "assets/svg/logoBig.svg";
import DarkLogo from "assets/svg/darkLogo.svg";
import { HeartIcon, CogIcon, ViewGridIcon, HomeIcon } from "@heroicons/react/outline";
import { Navigator } from "react-router-dom";

export const logo = {
  Lite: Logo,
  Dark: DarkLogo,
};

export const listIcon = [
  {
    name: "Home",
    delay: "650",
    Icon: HomeIcon,
  },
  {
    name: "Heart",
    delay: "800",
    Icon: HeartIcon,
  },
  {
    name: "Settings",
    delay: "950",
    Icon: CogIcon,
  },
];
