import React from "react";
import { MobileDropDown } from "@/components/ui/buttons/MobileDropDown";
import Image from "next/image";
import { development_story } from "@/lib/info";
import NextButton from "@/components/ui/buttons/NextButton.client";
import DualImageDisplay from "@/components/ui/image/DualImageDisplay.client";

type Props = {};

export default function Design({}: Props) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-8">
        {development_story[1].title}
      </h1>

      <MobileDropDown
        name="Wireframing stage"
        description={development_story[1].wireframe.description}
      />

      <DualImageDisplay
        img={development_story[1].wireframe.imageUrl}
        orientation="left"
        text={development_story[1].wireframe.text}
      />

      <DualImageDisplay
        img={development_story[1].designSystem.imageUrl}
        orientation="right"
        text={development_story[1].designSystem.text}
      />

      <MobileDropDown
        name="Building Design System"
        description={development_story[1].designSystem.description}
      />

      <DualImageDisplay
        img={development_story[1].buildingPages.imageUrl}
        orientation="left"
        text={development_story[1].buildingPages.text}
      />

      <MobileDropDown
        name="Building Design System"
        description={development_story[1].buildingPages.description}
      />

      <div className="sm:flex sm:justify-center">
        <NextButton link="/development" text="Next" />
      </div>
    </div>
  );
}
