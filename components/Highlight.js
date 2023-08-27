import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Highlight({ text, link }) {
  return (
    <div>
      <a
        className="group transition-all duration-300 ease-in-out"
        href={link ? link : "#"}
        target="_blank"
        rel="noreferrer"
      >
        <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          {text ? text : "#"}{" "}
          <ArrowTopRightOnSquareIcon className="h-4 inline mb-1" />
        </span>
      </a>
    </div>
  );
}
