export const fnSetDate = (type: "short" | "long" | "shorter", date) => {
  let dateProps: {
    weekday?: string;
    year?: string;
    month: string;
    day: string;
  };
  switch (type) {
    case "shorter":
      dateProps = {
        month: "long",
        day: "numeric",
      };
      break;
    case "short":
      dateProps = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      break;
    case "long":
      dateProps = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      break;
  }

  return date.toLocaleDateString("en-US", dateProps);
};
