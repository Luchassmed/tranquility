import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Highlight({ text, link }) {
  return (
    <a
      href={link || "#"}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-1 font-black uppercase underline decoration-4 underline-offset-4 hover:bg-white hover:text-black transition-all duration-200 px-1"
    >
      <span>{text || "#"}</span>
      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
    </a>
  );
}
