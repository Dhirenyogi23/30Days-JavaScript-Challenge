//************************************************* */

// Activity 1: Variable Declaration ✅

// - Task 1 Declare a variable using `var`, assign it a number, and log the value to the console.

var num = 23;
console.log(num);
console.log("****Task 1 is ended Here!*****");


// - Task 2 Declare a variable using `let`, assign it a string, and log the value to the console.

let str = "Dhiren Yogi";
console.log(str);
console.log("****Task 2 is ended Here!****");


//**************************************************   //

//Activity 2 : Constant Deceleration ✅

// - Task 3 Declare a variable using `const`, assign it a boolean value, and log the value to the console.

const boolean = true
console.log(boolean);
console.log("****Task 3 is ended Here!****");


//************************************************************ */

// Activity 3 : Data Types

// - Task 4: Create a variables different data types(number, string, boolean, object, array) and log each variable's type using the `typeof` operator.


//number type
let value = 20;
console.log(typeof value);

//string type
let value2 = "Teena";
console.log(typeof value2);

//boolean type
let value3 = true;
console.log(typeof value3);


//object type
let value4 = {
    name: "dhiren",
    age: 24
}
console.log(typeof value4)


//array type
let value5 = ["Javascript", "chai", "code", "Challenge", "2024"];
console.log(typeof value5);

console.log("****Task 4 is ended Here!****");




//***************************************************** */

// Activity 4 : Reassigning Variables.

// - Task 5 : Declare a value using `let`, assign it an initial value, and log both value to the console. 

let initialValue = "top";
console.log(`Initial value : `,initialValue);
initialValue = "Bottom";
console.log(`reassigning value: `, initialValue)

console.log("Task 5 is ended Here!****");


//******************************************************************* */


// Activity 5 : understanding `const`

//- Task 6: try reassigning a variable declare with `const` and observe the error.

const anamie = "hero"
anamie = "villian";
console.log(anamie); 
 // ⚠️ Error Observed  =  typeError: Assignment to constant variable.

console.log("****Task 6 is ended Here****");



//*********************************************************** */



// Feature Request.

// 1. Variable type console.log write a script that declare the variables of different data types and logs both the value of each variables to the console.



//deceleration
let numVal = 23;
let stringVal = "Dhiren";
let booleanVal = true;
let arrVal = ["javaScript", "code", "chai", "Sleep"];
let objVal = {name:"ram", age: 12};
let noVal = "null";
let undefined;



console.log("number type: ",  numVal);
console.log("string type: ", stringVal);
console.log("boolean type: ", booleanVal);
console.log("array type: ", arrVal);
console.log("object type: ", objVal);
console.log("null type:", noVal);
console.log("undefined type: ", undefined);


// 2. Reassignment Demo: Create a script that demonstrates the difference in behaviour between `let` and `const` when it comes to reassignment.


// Reassignment to let variable.
let letVariable = "This is the initial value for demonstrate of let variable";
console.log("initial Value: ", letVariable);

letVariable = "This is reassigned value for demonstrating of let variable.";
console.log("reassigned Value: ", letVariable)



// Reassignment to const variable.
const constVariable = "this is initial value for demonstrating of const variable";
console.log("initial value : ", constVariable);

try{
    constVariable = "This is reassigned value for demonstrating of cost variable";
    console.log("Reassigned Value: ", constVariable);
}
catch(error){
    console.log(error)
}
