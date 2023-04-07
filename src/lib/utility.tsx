import Image from "next/image";
import React from "react";

// export const descriptionFormatter = (description: string) => {
//   const descriptionArray = description.split(".").map((item, index) => {
//     return (
//       <span key={index}>
//         {item}
//         .
//         <br />
//         <br />
//       </span>
//     );
//   });
//   return descriptionArray;
// };

export const descriptionFormatter = (description: string) => {
  const paragraphArray = description.split(".");
  let paragraphs = [];
  let currentParagraph = "";

  for (let i = 0; i < paragraphArray.length; i++) {
    const sentence = paragraphArray[i].trim() + ".";
    currentParagraph += sentence;
    const nextSentence = paragraphArray[i + 1]
      ? paragraphArray[i + 1].trim()
      : "";

    if (currentParagraph.length + nextSentence.length > 120) {
      paragraphs.push(currentParagraph);
      currentParagraph = "";
    }
  }
  if (currentParagraph.length > 0) {
    paragraphs.push(currentParagraph);
  }

  return paragraphs.map((paragraph, index) => (
    <p key={index} className="mb-4">
      {paragraph}
    </p>
  ));
};

export const displayImg = (
  images: { imageUrl: string; title: string; text: string }[],
  orientation: string | undefined
) => {
  const leftContent = (
    <>
      {images.slice(0, 2).map((image, index) => (
        <React.Fragment key={index}>
          {index === 0 && (
            <div>
              <p className="text-lg font-bold   text-gray-900">{image.text}</p>
            </div>
          )}
          <Image
            src={image.imageUrl}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </React.Fragment>
      ))}
    </>
  );

  const rightContent = (
    <>
      {images.slice(0, 3).map((image, index) => (
        <React.Fragment key={index}>
          {index === 2 && (
            <div>
              <p className="text-lg font-bold   text-gray-900">{image.text}</p>
            </div>
          )}
          {index === 0 || index === 1 ? (
            <Image
              src={image.imageUrl}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          ) : null}
        </React.Fragment>
      ))}
    </>
  );

  const centerContent = (
    <>
      {images.slice(0, 2).map((image, index) => (
        <React.Fragment key={index}>
          <Image
            src={image.imageUrl}
            alt="Picture of the author"
            width={500}
            height={500}
            className="aspect-square"
          />
          {index === 0 && (
            <div className="flex items-center">
              <p className="text-lg font-bold  text-gray-900   ">
                {image.text}
              </p>
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  );

  switch (orientation) {
    case "left":
      return leftContent;
    case "right":
      return rightContent;
    case "center":
      return centerContent;
    default:
      return (
        <>
          {images.slice(0, 2).map((image, index) => (
            <React.Fragment key={index}>
              <Image
                src={image.imageUrl}
                alt="Picture of the author"
                width={500}
                height={500}
                className="col-span-1 flex justify-center items-center "
              />
              {index === 0 && (
                <div>
                  <p className="text-base font-bold   text-gray-600">
                    {image.text}
                  </p>
                </div>
              )}
            </React.Fragment>
          ))}
        </>
      );
  }
};
