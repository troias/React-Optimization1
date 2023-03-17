import React from "react";
import { MobileDropDown } from "@/components/ui/buttons/MobileDropDown";
import { development_story } from "@/lib/info";
import TecUsed from "@/components/tec_used/tec_used";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <MobileDropDown
        name={development_story[0].title}
        description={development_story[0].description}
      />
      <TecUsed />
    </div>
  );
}
