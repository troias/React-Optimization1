"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type Props = {
  name: string;
  description: string;
};

export const MobileDropDown = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between w-full px-2 py-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{props.name}</h3>
        </div>

        <div>
          <ChevronDownIcon
            className="h-5 w-5 flex-none text-gray-400"
            aria-hidden="true"
            onClick={clickHandler}
          />
        </div>
      </div>
      {isOpen && (
        <div className="mt-2">
          <p className="text-sm text-gray-500">{props.description}</p>
        </div>
      )}
    </>
  );
};
