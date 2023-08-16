export const handleErrorMessage = (errMessage: string): string => {
  const [, message] = errMessage.split("/");
  return message
    .split("-")
    .map((word, i) =>
      !i ? word[0].charAt(0).toUpperCase() + word.slice(1) : word
    )
    .join(" ");
};
