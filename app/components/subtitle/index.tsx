import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Subtitle({ children, className = "" }: Props) {
  return (
    <h2 className={`text-4xl text-pastel-blue ${className}`}>{children}</h2>
  );
}

export default Subtitle;
