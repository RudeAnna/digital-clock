export const createArrayOfNums = (number: number): number[] => {
  const arrOfStrings = getArrOfStrings(number);
  const arrOfNums = convertArrOfStringsToNum(arrOfStrings);
  if(arrOfNums.length === 1) {
    return [0, ...arrOfNums];
  } else {
    return arrOfNums;
  }
};

const getArrOfStrings = (number: number): string[] => {
  return Array.from(number.toString());
}

const convertArrOfStringsToNum = (arr: string[]): number[] => {
  return arr.map((str: string) => Number(str));
}
