"use client";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { development_story } from "@/lib/info";
import AlternatingImgTxt from "./AlternatingImgTxt.client";

type Props = {
  orientation: string;
  img: string;
  text: string;
};

export default function DualImageDisplay({ orientation, img, text }: Props) {
  const [isMobile] = useMediaQuery("(max-width: 640px)");

  return (
    <div className="py-12">
      {isMobile ? (
        <div className="grid grid-cols-1 gap-8">
          <Image
            src={img}
            alt="Picture of the author"
            width="500"
            height="500"
          />
        </div>
      ) : (
        <AlternatingImgTxt oriantation={orientation} img={img} text={text} />
      )}
    </div>
  );
}
