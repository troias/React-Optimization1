"use client";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  img?: string;
  orientation?: "left" | "right" | "center";
  images?: {
    imageUrl: string;
    title: string;
  }[];
  text?: string;
};

export default function ImageDisplay({
  img,
  orientation,
  images,
  text,
}: Props) {
  const [isMobile] = useMediaQuery("(max-width: 640px)");
  const [isIpad] = useMediaQuery("(max-width: 920px)");

  const displayImages =
    Array.isArray(images) && images.length > 0 ? images : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {isMobile && (
        <div className="col-span-1">
          <Image
            src={img}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      )}
      {isIpad && !isMobile && (
        <div className="col-span-1 col-start-2">
          <Image
            src={img}
            alt="Picture of the author"
            width={500}
            height={500}
          />

          <div className="text-center">
            <p className="text-lg font-bold">{text}</p>
          </div>
        </div>
      )}
    </div>
  );
}
