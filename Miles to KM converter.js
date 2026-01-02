//Convert miles to kilometers. 
//1 mile equals 1.60934 kilometers.
let myDistanceMiles = prompt("This is a miles to km conversion site. State how many miles");
    myDistanceMiles = Number(myDistanceMiles);
let myDistanceKM = myDistanceMiles * 1.60934;
console.log(`A mile is 1.60934 kilometers, therefore`);
console.log("The distance of " + myDistanceMiles + " miles is equal to " + myDistanceKM + " kilometers");