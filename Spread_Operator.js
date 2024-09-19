//  ? Spread Operator

const colors = ["ํYellow","Red","Blue"];
const allColors = ["Green","Black",...colors];
const newColors = ["Pink","Skyblue"];

allColors.push(...newColors);
console.log(allColors);