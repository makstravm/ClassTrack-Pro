export const sortObjectKeys = (obj: {
  [key: string]: number;
}): {
  [key: string]: number;
} => {
  const sortedKeys = Object.keys(obj).sort().reverse();

  const sortedObject: { [key: string]: any } = {};
  for (const key of sortedKeys) {
    sortedObject[key] = obj[key];
  }

  return sortedObject;
};
