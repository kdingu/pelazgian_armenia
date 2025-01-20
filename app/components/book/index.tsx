import React from "react";
import { Book } from "~/lib/types";

type Props = {
  data: Book;
  className?: string;
};

function BookTile({ data, className = "" }: Props) {
  return (
    <div
      className={`group relative border h-full w-full max-h-[350px] max-w-[250px] bg-black ${className}`}
    >
      <img
        src={data.cover_url}
        alt="book cover"
        className="w-full h-full object-contain"
      />
      <div className="transition-all opacity-0 group-hover:opacity-100 text-white flex pb-3 justify-center items-end w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black via-transparent">
        View More
      </div>
    </div>
  );
}

export default BookTile;
