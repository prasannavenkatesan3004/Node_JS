// calculator with Function, Arrow Function and basic Lexical Scope
// Calculator funtion
const Calculator = (a,b) => {
    let Addition = () => a+b;
    let Subtract = () => a-b;
    let Multiply = () => a*b;
    let Division1 = () => b!==0 ? a/b : "B = 0, Cannot divide by 0";
    //if 0
    let Division2 = () => c!==0 ? a/c : "C = 0, Cannot divide by 0";
//Retun Statements
return {Addition,Subtract,Multiply,Division1,Division2};
};
// Main Function
let a = 10
let b = 5
let c = 0
//Function Call
const Mycalc = Calculator(a,b);
//Printing results
console.log("Addition : ", Mycalc.Addition());
console.log("Sbutraction : ", Mycalc.Subtract());
console.log("Multiplication : ", Mycalc.Multiply());
console.log("Division : ", Mycalc.Division1());
console.log("Division : ", Mycalc.Division2());
