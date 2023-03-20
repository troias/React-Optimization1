import React from "react";
import { MobileDropDown } from "@/components/ui/buttons/MobileDropDown";
import { development_story } from "@/lib/info";
import TecUsed from "@/components/tec_used/tec_used";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 text-center py-8">
        Step One Ideation
      </h1>
      <div className="py-8">
        <MobileDropDown
          name={development_story[0].title}
          description={development_story[0].description}
        />
      </div>

      <div className="flex justify-center items-center">
        <Image
          src={development_story[0].imageUrl}
          width={500}
          height={500}
          className="filter grayscale"
          alt="Image of my idea"
        />
      </div>

      <TecUsed />
      <div className="py-8">
        <Link
          href="/design"
          className="inline-block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors duration-300 justify-center flex"
        >
          Next Step
        </Link>
      </div>
    </div>
  );
}
