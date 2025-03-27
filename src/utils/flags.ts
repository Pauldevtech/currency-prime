// src/utils/flags.ts
export const getCountryFlag = (countryCode: string): string => {
  // Regional Indicator Symbol Letters A-Z are Unicode 127462-127487
  // 127397 + ASCII code of uppercase letter gives the corresponding regional indicator
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};