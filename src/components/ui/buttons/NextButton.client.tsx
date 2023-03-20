"use client";
import React from "react";
import Link from "next/link";

type Props = {
  text: string;
  href: string;
};

export default function NextButton({ text, href }: Props) {
  console.log("text", text, "href", href);
  return (
    <div className="py-8">
      {/* <Link
        href={href}
     
        className="inline-block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors duration-300 justify-center flex"
        {text}
        >

      </Link> */}
    </div>
  );
}
