//1 inch = 2.54 centimetres.
//2.2046 pounds in a kilo
let inches = prompt(`how tall are you in inches?`);
let pounds = prompt(`what is your weight (in pounds?)`);
let weight = Number(pounds) / 2.2046; // in kilos
let height = Number(inches) * 2.54; // height in centimetres
console.log(`your weight is ${weight} kilograms, and your height is ${height} centimeters`);
let bmi = weight/((height/100)*(height/100));
console.log(`your BMI is ${bmi}`);
