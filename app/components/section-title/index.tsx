import React from "react";
import Subtitle from "~/components/subtitle";

type Props = {
  children: React.ReactNode;
};

function SectionTitle({children}: Props) {
  return (
    <Subtitle className="relative w-max mb-4">
      <span>{children}</span>
      <div className="border-b-2 border-dark-blue absolute bottom-0 left-0 max-w-[30px] w-[calc(100%-20px)]" />
    </Subtitle>
  );
}

export default SectionTitle;
