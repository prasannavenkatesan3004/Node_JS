//input number
let a = 15;
let b = 10;
// input name
let First_name = "Prasanna";
let Second_name = 'Venkatesan';
//input age
let age = 24;
//output math
console.log("Min",Math.min(a,b));
console.log("Addition : ",a+b);
console.log('Subtracion : ',a-b);
console.log('Multiply : ',a*b);
console.log('Division',a/b);
console.log("Modulus",a%b);
console.log('Power : ',a**b);
//String
console.log("\nFull Name : ",First_name + " "+ Second_name);
let Full_Name= First_name + " "+ Second_name
console.log("Length of name : ", Full_Name.length);
console.log("Uppercase : ", Full_Name.toUpperCase());
console.log("Lowercase : ", Full_Name.toLowerCase());
console.log("Includes \'Ven\' : ", Full_Name.includes("Ven"));
console.log("Slice (0-4) : ", Full_Name.slice(0, 4));
//Boolean
let isBaby = age >= 1 && age < 7;
console.log("\nIs Baby : ", isBaby);
let isBoy = age >= 7 && age <=12 ;
console.log("Is Boy : ", isBoy);
let isTeen = age >= 13 && age <= 19;
console.log("Is teen : ", isTeen);
let isAdult = age >= 20 && age <= 60;
console.log("Is Adult : ", isAdult);
let isGranny = age >= 60;
console.log("Is Old : ", isGranny);

