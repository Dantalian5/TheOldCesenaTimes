export const fnUppercaseBy = (text) => {
  const parts = text.split(" ");
  const transformedParts = parts.map((part) =>
    part.toLowerCase() === "and" || part.toLowerCase() === "by"
      ? part
      : part.toUpperCase(),
  );
  const transformedText = transformedParts.join(" ");
  return transformedText;
};

export const fnHighlightText = (text, filter) => {
  return text.split(new RegExp(`(${filter})`, "gi")).map((part, index) => (
    <span
      key={index}
      style={
        part.toLowerCase() === filter.toLowerCase()
          ? { backgroundColor: "#567B94", color: "#ffffff", fontWeight: "700" }
          : {}
      }
    >
      {part}
    </span>
  ));
};
