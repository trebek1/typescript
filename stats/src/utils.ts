export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split("/").map(val => parseInt(val, 10));
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
