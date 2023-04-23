import React from "react";
import { MobileDropDown } from "@/components/ui/buttons/MobileDropDown";
import NextButton from "@/components/ui/buttons/NextButton.client";
import { development_story } from "@/lib/info";
import ImageDisplay from "@/components/ui/image/ImageDisplay.client";
import TextDisplay from "@/components/ui/text-dispaly/text_display1";

type Props = {};

export default function Development({}: Props) {
  // Destructure the necessary properties from the development_story object
  const { title, description, images, text, name } = development_story[2];

  return (
    <>
      {/* Use h1 element for main heading */}
      <h1 className="text-lg md:text-2xl font-bold text-center py-8">
        Development
      </h1>

      <div className="pb-8 hidden sm:flex">
        <TextDisplay />
      </div>

      {/* Wrap MobileDropDown component with a section element and add aria-label */}
      <section aria-label={title} className="pb-8 sm:hidden">
        <MobileDropDown
          name={title}
          description={description}
          externalURL={{
            url: "https://github.com/troias/React-Optimization1",
            text: "Github",
          }}
        />
      </section>
      {/* Wrap ImageDisplay component with a figure element and add alt attribute */}
      <figure className="py-12">
        <ImageDisplay
          img="https://source.unsplash.com/9VzoRKfBsMM/800x600/"
          images={images}
          alt={name}
          text={text}
          orientation="center"
        />
      </figure>
      <div className="sm:flex sm:justify-center py-8">
        {/* Use link element for NextButton and add aria-label */}
        <NextButton link="/" text="Go to Home" aria-label="Go to Home" />
      </div>
    </>
  );
}
