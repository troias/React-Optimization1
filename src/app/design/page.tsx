import React from "react";
import { MobileDropDown } from "@/components/ui/buttons/MobileDropDown";

import { development_story } from "@/lib/info";
import NextButton from "@/components/ui/buttons/NextButton.client";
import DualImageDisplay from "@/components/ui/image/DualImageDisplay.client";

type Props = {};

export default function Design({}: Props) {
  return (
    <div>
      {/* Section title */}
      <h1 className="text-2xl font-bold text-center py-8">
        {development_story[1].title}
      </h1>

      {/* Wireframing stage */}
      <MobileDropDown
        name="Wireframing stage"
        description={development_story[1]?.wireframe?.description || ""}
        externalURL={development_story[1].externalURL}
      />

      {/* Dual image display */}
      <DualImageDisplay
        img="/wireframe.png"
        orientation="left"
        text={development_story[1]?.wireframe?.text || ""}
      />

      {/* Building Design System */}
      <MobileDropDown
        name="Building Design System"
        description={development_story[1]?.designSystem?.description || ""}
      />
      <DualImageDisplay
        img={"/design-system.png"}
        orientation="right"
        text={development_story[1]?.designSystem?.text || ""}
      />

      {/* Building pages */}
      <MobileDropDown
        name={development_story[1]?.buildingPages?.name || ""}
        description={development_story[1]?.buildingPages?.description || ""}
      />
      <DualImageDisplay
        img={"/pages.png"}
        orientation="left"
        text={development_story[1]?.buildingPages?.text || ""}
      />

      {/* Next button */}
      <div className="sm:flex sm:justify-center">
        <NextButton link="/development" text="Next" />
      </div>
    </div>
  );
}
