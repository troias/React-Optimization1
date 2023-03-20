import React from "react";
import { MobileDropDown } from "@/components/ui/buttons/MobileDropDown";
import Image from "next/image";
import { development_story } from "@/lib/info";
import { NextButton } from "@/components/ui/buttons/NextButton.client";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-8">
        {development_story[1].title}
      </h1>

      <div className="flex justify-center items-center">
        <Image
          src={development_story[1].wireframe.imageUrl}
          width={500}
          height={500}
          className="filter grayscale"
          alt="Image of my idea"
        />
      </div>

      <MobileDropDown
        name="Wireframing stage"
        description={development_story[1].wireframe.description}
      />

      <div className="flex justify-center items-center">
        <Image
          src={development_story[1].designSystem.imageUrl}
          width={500}
          height={500}
          className="filter grayscale"
          alt="Image of my idea"
        />
      </div>

      <MobileDropDown
        name="Building Design System"
        description={development_story[1].designSystem.description}
      />

      <div className="flex justify-center items-center">
        <Image
          src={development_story[1].buildingPages.imageUrl}
          width={500}
          height={500}
          className="filter grayscale"
          alt="Image of my idea"
        />
      </div>

      <MobileDropDown
        name="Building Design System"
        description={development_story[1].buildingPages.description}
      />

      <div className="py-8">{/* <NextButton /> */}</div>
    </div>
  );
}
