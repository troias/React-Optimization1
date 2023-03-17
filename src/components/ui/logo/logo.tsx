import React from "react";
import Link from "next/link"; // This is where we'll define our Tailwind classes

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link href="/">
        <img
          src="https://svgshare.com/i/rD6.svg"
          alt="logo"
          className="h-5   w-20"
        />
      </Link>
    </div>
  );
};

export default Logo;
