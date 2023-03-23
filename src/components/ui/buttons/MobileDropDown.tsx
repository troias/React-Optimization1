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
        className="flex justify-between items-center w-full px-4 py-6 border-b border-gray-300/40 bg-gray-200/60 cursor-pointer hover:bg-slate-300/70 rounded-sm"
        onClick={clickHandler}
        // Add accessibility attribute to indicate this is a button
        role="button"
        // Add accessibility attribute to indicate that the button can be toggled
        aria-pressed={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900 lg:pl-4">
          {props.name}
        </h3>
        <div className="lg:pr-4">
          <ChevronDownIcon
            className="h-5 w-5 flex-none text-gray-400 cursor-pointer"
            aria-hidden="true"
            onClick={clickHandler}
          />
        </div>
      </div>

      {/* Content section of dropdown */}
      {isOpen && (
        <div className="p-4">
          <p className="sm:text-lg mg:text:lg text-gray-600">
            {descriptionArray}
          </p>
          {externalURL && (
            <h4 className="text-sm text-gray-600 py-2">{externalURL.text} </h4>
          )}

          {externalURL && (
            <a
              href={externalURL.url}
              className="text-sm text-gray-500 underline hover:opacity-75 hover:scale-105 hover:border-gray-200"
            >
              {externalURL.url}
            </a>
          )}
        </div>
      )}
    </>
  );
};
