"use client";
import React, { useEffect } from "react";
import Link from "next/link";

type Props = {
  text: string;
  link: string;
};

export default function NextButton({ text, link }: Props) {
  useEffect(() => {
    console.log("NextButton");
  }, []);

  return (
    <div className="sm:flex py-8">
      <Link
        href={link}
        className=" bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors duration-300 justify-center flex"
      >
        <button className=" py-3 text-lg">{text ? text : "Next"}</button>
      </Link>
    </div>
  );
}
