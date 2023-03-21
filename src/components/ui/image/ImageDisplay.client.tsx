"use client";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { development_story } from "@/lib/info";

type Props = {};

export default function ImageDisplay({}: Props) {
  const [isMobile] = useMediaQuery("(max-width: 640px)");
  const [isIpad] = useMediaQuery("(max-width: 920px)");
  const { images } = development_story[2];
  return (
    <div>
      {isMobile ? (
        <div className="relative w-full h-96">
          <Image
            src={images[0].imageUrl}
            alt={images[0].title}
            width={500}
            height={500}
            className="rounded-2xl filter grayscale hover:grayscale-0"
          />
        </div>
      ) : (
        <div
          className={
            isIpad ? "grid grid-cols-2 gap-4" : "grid grid-cols-3 gap-4"
          }
        >
          {images.slice(0, isIpad ? 2 : images.length).map((image, index) => (
            <div
              key={index}
              className="relative flex justify-center w-full h-96 "
            >
              <Image
                src={image.imageUrl}
                alt={image.title}
                width={500}
                height={500}
                className="rounded-2xl filter grayscale hover:grayscale-0 "
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
