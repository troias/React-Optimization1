import React from "react";
import { MobileDropDown } from "@/components/ui/buttons/MobileDropDown";
import { development_story } from "@/lib/info";
import TecUsed from "@/components/tec_used/tec_used";

import NextButton from "@/components/ui/buttons/NextButton.client";
import ImageDisplay from "@/components/ui/image/ImageDisplay.client";

type Props = {};

export default function Ideation({}: Props) {
  return (
    <div>
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center py-8">
        {development_story[0].title}
      </h1>
      <div className="py-8">
        <MobileDropDown
          name={development_story[0].name}
          description={development_story[0].description}
          externalURL={development_story[0].externalURL}
        />
      </div>

      <ImageDisplay
        // img={development_story[0].imageUrl}
        images={development_story[0].images}
        img={development_story[0].imageUrl}
        text={development_story[0].text}
        orientation="center"
      />

      <TecUsed />

      <div className="sm:flex sm:justify-center min-w-[60px]">
        <NextButton link="/design" text="Next" />
      </div>
    </div>
  );
}
