"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { descriptionFormatter } from "@/lib/utility";

type Props = {
  name: string;
  description: string;
};

export const MobileDropDown = (props: Props) => {
  //get description and add 2 lines after fullstop
  const descriptionArray = descriptionFormatter(props.description);

  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="flex justify-between items-center w-full px-4 py-6 border-b border-gray-300/40 bg-gray-300/70 cursor-pointer hover:bg-slate-300/70  "
        onClick={clickHandler}
      >
        <h3 className="text-lg font-medium text-gray-900 lg:pl-4">
          {props.name}
        </h3>
        <div className="lg:pr-4">
          <ChevronDownIcon
            className="h-5 w-5 flex-none text-gray-400 cursor-pointer "
            aria-hidden="true"
            onClick={clickHandler}
          />
        </div>
      </div>
      {isOpen && (
        <div className="p-4">
          <p className="text-sm text-gray-500">{descriptionArray}</p>
        </div>
      )}
    </>
  );
};
