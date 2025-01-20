import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Container({children, className = ""}: Props) {
  return (
    <div className="px-4">
      <div className={`px-4 max-w-4xl m-auto ${className}`}>{children}</div>
    </div>
  );
}

export default Container;
