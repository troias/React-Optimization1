"use client";

import { useState } from "react";
import { development_story } from "../../../src/lib/info";

export default function Story() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Story</h3>
        {development_story.map((item, index) => {
          const [open, setOpen] = useState(false);
          return (
            <div key={index} className="mt-5">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                  {item.title}
                </dt>
                <svg
                  className={`${
                    open ? "rotate-180" : ""
                  } w-5 h-5 text-gray-500`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={open ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                  />
                </svg>
              </div>
              <dd
                className={`${
                  open ? "block" : "hidden"
                } mt-1 text-sm leading-5 text-gray-900`}
              >
                {item.description}
              </dd>
            </div>
          );
        })}
      </div>
    </div>
  );
}
