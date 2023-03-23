import React from "react";

import { MobileDropDown } from "@/components/ui/buttons/MobileDropDown";
import NextButton from "@/components/ui/buttons/NextButton.client";
import { development_story } from "@/lib/info";
import ImageDisplay from "@/components/ui/image/ImageDisplay.client";

type Props = {};

export default function Development({}: Props) {
  const { title, description, images, text } = development_story[2];

  console.log(images);

  return (
    <>
      <h1 className="text-lg md:text-2xl font-bold text-center py-6">
        Development
      </h1>
      <MobileDropDown name={title} description={description} />
      <ImageDisplay
        img="https://source.unsplash.com/9VzoRKfBsMM/800x600/"
        images={images}
        alt={title}
        text={text}
      />

      <div className="sm:flex sm:justify-center">
        <NextButton link="/" text="Go to Home" />
      </div>
    </>
  );
}
