import React from "react";
import { MobileDropDown } from "@/components/ui/buttons/MobileDropDown";
import { development_story } from "@/lib/info";
import TecUsed from "@/components/tec_used/tec_used";
import NextButton from "@/components/ui/buttons/NextButton.client";
import ImageDisplay from "@/components/ui/image/ImageDisplay.client";
import TextDisplay from "@/components/ui/text-dispaly/text_display";

type Props = {};

export default function Ideation({}: Props) {
  return (
    <div>
      {/* Section Title */}
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center py-8">
        {development_story[0].title}
      </h1>

      <div className="pb-8 hidden sm:flex">
        <TextDisplay />
      </div>

      {/* Mobile dropdown */}
      <div className="pb-8 sm:hidden">
        <MobileDropDown
          name={development_story[0].name}
          description={development_story[0].description}
          externalURL={development_story[0].externalURL}
        />
      </div>

      {/* Image display */}
      <ImageDisplay
        images={development_story[0].images}
        img={development_story[0].imageUrl}
        text={development_story[0].text}
        orientation="center"
        title={development_story[0].title}
        alt={development_story[0].title} // add alt text for accessibility
      />

      <div> </div>

      {/* Technologies used */}
      <div className="py-8">
        <TecUsed />
      </div>

      {/* Next button */}
      <div className="sm:flex sm:justify-center min-w-[60px] py-8">
        <NextButton link="/design" text="Next" />
      </div>
    </div>
  );
}
