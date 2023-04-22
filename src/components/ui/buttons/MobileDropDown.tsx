"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { descriptionFormatter } from "@/lib/utility";

type Props = {
  name: string;
  description: string;
  externalURL?: {
    url: string;
    text: string;
  };
};

// MobileDropDown component
export const MobileDropDown = (props: Props) => {
  // Get description and add 2 lines after fullstop
  const descriptionArray = descriptionFormatter(props.description);

  //make sure the description is not empty
  const description = descriptionArray.length > 0 ? descriptionArray : [""];

  // State to keep track of whether dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Click handler for dropdown
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const { externalURL } = props;

  return (
    <>
      {/* Header section of dropdown */}
      <div
        className="flex justify-between items-center w-full px-4 py-3 border rounded-md border-gray-400/40 cursor-pointer relative z-10 "
        onClick={clickHandler}
        // Add accessibility attribute to indicate this is a button
        role="button"
        // Add accessibility attribute to indicate that the button can be toggled
        aria-pressed={isOpen}
      >
        <h3 className="text-basefont-medium text-gray-900 lg:pl-4">
          {props.name}
        </h3>
        <div className="lg:pr-4">
          <ChevronDownIcon
            className="h-5 w-5 flex-none text-gray-400 cursor-pointer"
            aria-hidden="true"
            onClick={clickHandler}
          />
        </div>
        <span className="absolute top-0 left-0 w-full h-full border-2 border-transparent rounded-md hover:border-indigo-600/50  z-0"></span>
      </div>

      {/* Content section of dropdown */}
      {isOpen && (
        <div className="p-4 py-10 border-botton  border-b-2 border-gray-200">
          <p className="text-base leading-7 text-gray-700 lg:max-w-lg border-b-2 border-gray-200">
            {descriptionArray || description}
          </p>
          {externalURL && (
            <h4 className="text-lg text-bold text-gray-800 py-6">
              {externalURL.text[0].toUpperCase() + externalURL.text.slice(1)}
            </h4>
          )}

          {externalURL && (
            <a
              href={externalURL.url}
              className="text-base leading-7 text-gray-700 lg:max-w-lg underline hover:opacity-75 hover:scale-105 hover:border-gray-200  "
            >
              {externalURL.url}
            </a>
          )}
        </div>
      )}
    </>
  );
};
