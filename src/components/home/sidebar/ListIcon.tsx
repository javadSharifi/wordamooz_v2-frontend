import React from "react";
import { Iicon, IListIcon } from "interfaces";
import ButtonSidebar from "./ButtonSidebar";
import { LogoutIcon } from "@heroicons/react/outline";
import useLogout from "services/auth/logout";

function ListIcon({ list }: IListIcon<Iicon[]>) {
  const {mutate:logout} = useLogout();
  const listItems = list.map(({ delay, name, Icon }) => (
    <ButtonSidebar Icon={Icon} delay={delay} key={name}>
      {name}
    </ButtonSidebar>
  ));

  return (
    <div className="mt-14 flex  w-full flex-col items-center gap-3 ">
      {listItems}
      <ButtonSidebar onClick={() => logout()} Icon={LogoutIcon} delay="1100">
        Logout
      </ButtonSidebar>
    </div>
  );
}

export default ListIcon;
