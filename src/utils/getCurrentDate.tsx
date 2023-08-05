export const getCurrentDate = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("ru-RU"); // Using 'en-GB' locale for dd.mm.yyyy format
  return formattedDate;
};
