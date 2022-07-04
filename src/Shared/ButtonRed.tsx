import React from "react";

function ButtonRed({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <button
      className={`${className}  btn btn-error mt-2   text-white `}
    >
      {children}
    </button>
  );
}

export default ButtonRed;
