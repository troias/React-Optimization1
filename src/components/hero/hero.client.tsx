"use client";

import Link from "next/link";
import React from "react";
import Button from "../ui/buttons/Button";

type Props = {};

export default function Hero({}: Props) {
  const clickHandler = () => {
    console.log("clicked");
  };

  return (
    <div data-testid="hero">
      <div className="grid grid-cols-2 ">
        <div className="col-span-1">
          <p>
            Explore the
            <span className="text-4xl font-bold"> process </span>
            of how I transformed an intial concept into a fully functioning
            website
          </p>
        </div>
        <div className="col-span-1">
          <Link href="/story">
            <Button onClick={clickHandler}>Read the story</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
