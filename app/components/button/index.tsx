import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
};

function Button({ onClick = () => {}, children, className = "" }: Props) {
  return (
    <button
      onClick={onClick}
      className={`${className} transition-all border-2 text-pastel-blue border-pastel-blue px-10 py-2  hover:bg-soft-red hover:border-soft-red hover:text-white`}
    >
      {children}
    </button>
  );
}

export default Button;
