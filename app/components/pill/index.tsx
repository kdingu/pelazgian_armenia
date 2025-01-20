import React from "react";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

function Pill({children, title = ""}: Props) {
  return (
    <span title={title} className="px-3 py-1 rounded bg-flag-orange/20">{children}</span>
  );
}

export default Pill;
