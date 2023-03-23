"use client";
import React from "react";
import Image from "next/image";

type Props = {
  oriantation: string;
  img: string;
  text: string; // fixed typo
};

export default function AlternatingImgTxt({ oriantation, img, text }: Props) {
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
          <div className="col-span-1 flex justify-center items-center">
            <p className="text-center text-lg text-gray-500 font-bold">
              {text}
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Text column */}
          <div className="col-span-1 flex justify-center items-center">
            <p className="text-center text-lg text-gray-500 font-bold">
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
