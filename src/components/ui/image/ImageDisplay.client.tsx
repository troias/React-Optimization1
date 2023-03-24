"use client";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { displayImg } from "@/lib/utility";

type Props = {
  img?: string;
  orientation?: "left" | "right" | "center";
  images?: {
    imageUrl: string;
    title: string;
    text: string;
  }[];
  text?: string;
  externalUrl?: string;
  alt?: string;
};

export default function ImageDisplay({
  img,
  orientation,
  images,
  text,
}: Props) {
  const [isMobile] = useMediaQuery("(max-width: 640px)");
  const [isIpad] = useMediaQuery("(max-width: 1030px)");
  const [isDesktop] = useMediaQuery("(min-width: 1032px)");

  const displayImages =
    Array.isArray(images) && images.length > 0 ? images : [];

  const displayImage =
    displayImages.length > 0 && displayImg(displayImages, orientation);

  //display 2 images wtih 1 text box in 3 col grid on desktop and chose orientation based on props

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap md:gap-10">
      {isMobile && (
        <div className="col-span-1  aspect-auto">
          <Image
            src={img || "/wireframe.png"}
            alt="Picture of the author"
            width={600}
            height={600}
          />
          <div className="py-8 ">
            <p className=" text-base font-bold  flex justify-center items-center px-4 text-gray-600 hover:text-lg ">
              {text}
            </p>
          </div>
        </div>
      )}
      {isIpad && !isMobile && (
        <>
          <div className="col-span-1 flex justify-center items-center aspect-auto w-full ">
            <Image
              src={img || "/wireframe.png"}
              alt="Picture of the author"
              width={650}
              height={500}
            />
          </div>
          <div className="py-8   ">
            <p className="text-base font-bold  flex justify-center items-center px-4 text-gray-600">
              {text}
            </p>
          </div>
        </>
      )}
      {isDesktop && displayImage}
    </div>
  );
}
