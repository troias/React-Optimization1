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
      <div className="pb-8 sm:hidden">
        <MobileDropDown
          name="Wireframing stage "
          description={development_story[1]?.wireframe?.description || ""}
          externalURL={development_story[1].externalURL}
        />
      </div>

      {/* Dual image display */}

      <DualImageDisplay
        img="/wireframe.png"
        orientation="left"
        text={development_story[1]?.wireframe?.text || ""}
        title={development_story[1]?.wireframe?.title || ""}
      />

      {/* Building Design System */}
      <div className="pb-8 sm:hidden">
        <MobileDropDown
          name="Building Design System"
          description={development_story[1]?.designSystem?.description || ""}
        />
      </div>

      <DualImageDisplay
        img={"/design-system.png"}
        orientation="right"
        text={development_story[1]?.designSystem?.text || ""}
        title={development_story[1]?.designSystem?.title || ""}
      />

      {/* Building pages */}
      <div className="pb-8 sm:hidden">
        <MobileDropDown
          name={development_story[1]?.buildingPages?.name || ""}
          description={development_story[1]?.buildingPages?.description || ""}
        />
      </div>

      <DualImageDisplay
        img={"/pages.png"}
        orientation="left"
        text={development_story[1]?.buildingPages?.text || ""}
        title={development_story[1]?.buildingPages?.title || ""}
      />

      {/* Next button */}
      <div className="sm:flex sm:justify-center">
        <NextButton link="/development" text="Next" />
      </div>
    </div>
  );
}
