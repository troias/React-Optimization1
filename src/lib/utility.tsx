export const descriptionFormatter = (description: string) => {
  const descriptionArray = description.split(".").map((item, index) => {
    return (
      <span key={index}>
        {item}
        <br />
        <br />
      </span>
    );
  });
  return descriptionArray;
};
