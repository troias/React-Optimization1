"use client";

import Link from "next/link";
import React from "react";
import Button from "../ui/buttons/Button";
import { BookOpenIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function Hero({}: Props) {
  return (
    // Add role="banner" to signify that this is the main content of the page
    // Add aria-label for screen reader users to announce what the section is
    <div
      role="banner"
      aria-label="Hero Section"
      data-testid="hero"
      className="sm:py-12"
    >
      <div className="grid grid-cols-2">
        <div>
          <p
            // Add id for screen reader users to skip to the main content of the section
            id="hero-description"
            className="text-lg md:text-xl lg:text-2xl leading-tight p-6 font-bold text-center hover:text-blue-500 transition-colors duration-300 sm:text-xl"
          >
            Explore the process of how I transformed an initial concept into a
            fully functioning website
          </p>
        </div>
        <div className="flex justify-end items-center">
          <Link href="/story">
            <Button
              // Add onClick event listener for keyboard and screen reader users
              onClick={() => {
                console.log("Read the story");
              }}
              className="lg:px-4 lg:py-3 flex justify-end items-center bg-indigo-500 py-2 px-3 rounded-3xl text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <BookOpenIcon className="w-6 h-6 mr-2" />
              <span className="text-base sm:text-lg md:text-xl">
                Read the story
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
