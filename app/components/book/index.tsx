import React from "react";
import { Book } from "~/lib/types";
import { useTranslation } from "react-i18next";

type Props = {
	data: Book;
	className?: string;
};

function BookTile({ data, className = "" }: Props) {
	const { t } = useTranslation();

	return (
		<div className={`group relative overflow-hidden w-64 md:w-48 aspect-2/3 bg-black ${className}`}>
			<img
				src={data.cover_url || `https://placehold.co/250x350/EEE/31343C?font=open-sans&text=${t("noCoverText")}`}
				alt="book cover"
				className={`w-full h-full ${data.cover_url ? "object-contain" : "object-cover"}`}
			/>
			<div className="transition-all opacity-0 group-hover:opacity-100 text-white text-center px-3 flex pb-3 justify-center items-end w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black via-transparent">
				{data.title}
			</div>
		</div>
	);
}

export default BookTile;
