import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Button({ children, className = "" }: Props) {
  return (
    <button
      className={`${className} transition-all border-2 text-white border-dark-blue bg-dark-blue px-10 py-2  hover:bg-soft-red hover:border-soft-red`}
    >
      {children}
    </button>
  );
}

export default Button;
