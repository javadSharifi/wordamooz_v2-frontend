import React from "react";

function BtnDropdown({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: any;
}) {
  return (
    <button
      className="  dark:bg-transparent  hover:bg-gradient-info flex w-full cursor-pointer 
        flex-wrap rounded-md border-2 border-gray-300/30 p-2 hover:border-white hover:text-white "
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default BtnDropdown;
