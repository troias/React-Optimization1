import React from "react";
import Image from "next/image";

type Props = {
  oriantation: string;
  img: string;
};

export default function AlternatingImgTxt({ oriantation, img, text }: Props) {
  return (
    <div className="grid grid-cols-2 gap-8">
      {oriantation === "left" ? (
        <>
          <div className="col-span-1 flex justify-center">
            <Image
              src={img}
              alt="Picture of the author"
              width="500"
              height="500"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <p className="text-center">{text}</p>
          </div>
        </>
      ) : (
        <>
          <div className="col-span-1 flex justify-center items-center">
            <p className="text-center ">{text}</p>
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              src={img}
              alt="Picture of the author"
              width="500"
              height="500"
            />
          </div>
        </>
      )}
    </div>
  );
}
