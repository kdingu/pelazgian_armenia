import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function ButtonSubmit({ children, className = "" }: Props) {
  return (
    <button
      className={`${className} transition-all border-2 text-pastel-blue border-pastel-blue px-10 py-2 hover:bg-soft-red hover:border-soft-red hover:text-white`}
      type="submit"
    >
      {children}
    </button>
  );
}

export default ButtonSubmit;
