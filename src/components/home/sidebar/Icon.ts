/* eslint-disable no-unused-vars */
import Logo from "assets/svg/logoBig.svg";
import DarkLogo from "assets/svg/darkLogo.svg";
import { HeartIcon, CogIcon, ViewGridIcon } from "@heroicons/react/outline";

export const logo = {
  Lite: Logo,
  Dark: DarkLogo,
};

export const listIcon = [
  {
    name: "Apps",
    delay: "650",
    Icon: ViewGridIcon,
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
