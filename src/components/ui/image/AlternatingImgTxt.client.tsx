"use client";
import React from "react";
import Image from "next/image";

type Props = {
  oriantation: string;
  img: string;
  text: string; // fixed typo
  title: string;
};

export default function AlternatingImgTxt({
  oriantation,
  img,
  text,
  title,
}: Props) {
  // console.log("title", title);
  return (
    <div className="grid grid-cols-2 gap-8">
      {oriantation === "left" ? (
        <>
          {/* Image column */}
          <div className="col-span-1 flex justify-center">
            <Image
              src={img}
              alt="Picture of the author"
              width="500"
              height="500"
              // Add accessibility attribute to describe image content
              aria-label="Image"
            />
          </div>
          {/* Text column */}
          <div className="col-span-1 flex-col justify-center items-center">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4 ">
              <p className="text-lg font-semibold leading-7 text-indigo-600">
                {title}
              </p>
            </h1>
            <p className="text-base leading-7 text-gray-700 lg:max-w-lg ">
              {text}
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Text column */}
          <div className="col-span-1 flex-col justify-center items-center">
            <h1 className="text-center mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4 ">
              <p className="text-lg font-semibold leading-7 text-indigo-600">
                {title}
              </p>
            </h1>
            <p className="text-base leading-7 text-gray-700 lg:max-w-lg">
              {text}
            </p>
          </div>
          {/* Image column */}
          <div className="col-span-1 flex justify-center ">
            <Image
              src={img}
              alt="Picture of the author"
              width="500"
              height="500"
              // Add accessibility attribute to describe image content
              aria-label="Image"
              className=" "
            />
          </div>
        </>
      )}
    </div>
  );
}
