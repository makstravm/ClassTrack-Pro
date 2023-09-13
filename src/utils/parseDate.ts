export const parseDate = (str: string) =>
  new Date(str.split(".").reverse().join("-"));
