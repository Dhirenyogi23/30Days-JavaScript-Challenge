// Activity 1 :  Operators.✅

// -Task 1: Write a program to add two numbers and log the result to the console.

let num1 = 20;
let num2 = 10;
let sum = num1 + num2;
console.log(`the sum is : ${sum}`);

console.log("****The task 1 is ended Here.****");


// -Task 2: Write  a program to subtract two numbers and log the result to the console.

let num3 = 10;
let num4 = 5;
let subtract = num3 - num4;
console.log(`the subtract is : ${subtract}`);

console.log("****The task 2 is ended Here.****");


// -Task 3: Write a program to multiply two numbers and log the result to the console.

let num5 = 2;
let num6 = 3;
let multiply = num5 * num6;
console.log(`The Multiply is : ${multiply}`);

console.log("****The task 3 is ended Here.****");


// -Task 4: Write a program to divide two numbers and log the result to the console.

let num7 = 50;
let num8 = 5;
let divide = num7/num8;
console.log(`The divide is : ${divide}`);

console.log("****The task 4 is ended Here.****");


// - Task 5: Write a program to remainder two numbers and log the result to the console.

let num9 = 100;
let num10 = 2;
let remainder1 = num9 % num10;
console.log(`The divide is : ${remainder1}`);

console.log("****The task 5 is ended Here.****");




//*************************************************************************** */


//  Activity 2: Assignment Operator.✅


// - Task 6: use the "+=" operator to add a number to a variable and log the result to the console.

let value1 = 30;
 value1 += 10;
 console.log(`this is the assignment operator of sum : ${value1}`);

 console.log("****The task 6 is ended Here.****");


 // - Task 7: use the "-=" operator to subtract a number to a variable and log the result to the console

 let value2 = 20;
 value2 -= 10;
 console.log(`This is the assignment operator of subtract : ${value2}`);

 console.log("****The task 7 is ended Here.****");




 //************************************************************************** */

// Activity 3: Comparison Operator.✅


// - Task 8: Write a program to compare two numbers using '>' and '<' log the result to the console.

let a = 10;
let b = 5;

let greaterThan = a>b;
let lessThan = b<a;

console.log(a + ">" + b + ":" + " a is greater than b");
console.log(b + "<" + a + ":" + " b is less than a");

console.log("*****Task 8 is Ended Here.******");



// - Task 9: Write a program to compare two string using '>=' and '<=' log the result to the console.

let c = 20;
let d = 20;
let c2 = 10;
let d2 = 10;

let greaterThanEqual = c >= d;
let lessThanEqual = c <= d;

let greaterThanEqual1 = c2 >= d2;
let lessThanEqual1 = c2 <= d2;

console.log(c + " >= " + d + ": " + c + " Greater than or Equal to " + d);
console.log(c + " <= " + d + ": " + c + " Less than or Equal to " + d);

console.log(c2 + " >= " + d2 + ": " + c2 + " Greater than or Equal to " + d2);
console.log(c2 + " <= " + d2 + ": " + d2 + " Less than or Equal to " + c2);

console.log("*******Task 9 is ended Here.*******");


// - Task 10: Write a program to compare two numbers using  '==' and '===' log the result to the console.

let val1 = 10
let val2 = "10";

let equalTo = val1 == val2;
let stricklyequalTo = val1 === val2;

console.log(val1 + "==" + val2 + ":" + equalTo);
// in '==' only check the value. so it is equal that's why it is showing value as true.
console.log(val1 + "===" + val2 + ":" + stricklyequalTo);
// in '===' it checks boths datatype and value. so value are the same but the datatypes are not same (one is number and one is string) so that's why it is showing value as false.


//**************************************************************************** */


// Activity 4: Logical operators.✅


// - Task 11: Write a program that uses the `&&` operator that combine two conditions and log the result to the console.

let e = 10;
let f = 25;
let g = 30;

let condition1 = e<f && f<g;   
let condition2 =e<f && f>g;     

console.log("(" + e + "<" + f +") && (" + f + "<" + g + "): " + condition1);   // this return true
console.log("(" + e + "<" + f +") && (" + f + ">" + g + "): " + condition2);    // this return false

console.log("******Task 11 is ended Here******");


// - Task 12: Write a program that uses the '||' operator that combine two conditions and log the result to the console.

let h = 12;
let i = 10;
let j = 8;

let condition3 = h>i || i>j;     
let condition4 = h>i || i<j;     

console.log("("+ h + ">" + i +") || (" + i + ">" + j + "):" + condition3);    
// this return true
console.log("("+ h + ">" + i +") || (" + i + "<" + j + "):" + condition4);    
// this return true


console.log("******Task 12 is ended Here******");


// - Task 13: Write a program that uses the '!' operator to negate condition and log the result to the console.

let k = 50;
let l = 5;

let condition5 = k>l;
let negative = !condition5

console.log(k + ">" + l + ":" + condition5 );
console.log("!(" + k + ">" + l + "):" + negative);

console.log("******Task 13 is ended Here******");



//*************************************************************************** */


// Activity 5: Ternary Operator. ✅


// -Task 14: Write a program that use a ternary operator to check a number is positive or negative and log the result to the console.

let numCheck = -10;
let result = numCheck >= 0 ? "Positive Number" : "Negative Number";
console.log(numCheck + " is " + result);

console.log("********Task 14 is ended Here********");



//************************************************************************** */



// ❤️❤️❤️### Feature Request❤️❤️❤️



// 1. Arithemetic Operation Script : Write a script that perfoms basic arithemetic operation (additon, subtraction, multiplication, division, remainder) on two number and log the result to the console.



number1 = 10;
number2 = 5;

let addition = number1 + number2;
console.log(number1 + "+" + number2 + "=" + addition);

let subtraction = number1 - number2;
console.log(number1 + "-" + number2 + "=" + subtraction );

let multiplication = number1 * number2;
console.log(number1 + "*" + number2 + "=" + multiplication);

let division = number1 / number2;
console.log(number1 + "/" + number2 + "=" + division);

let remainder = number1 % number2;
console.log(number1 + "%" + number2 + "=" + remainder);




// 2. Comparision and Logical Operators: Create a script that compares two numbers using different comparision operators and combine conditions using logical operator, and log the result to the console.

let number3 = 20;
let number4 = 15;



//comparision Operator ✅✅✅

let res1 = number3 > number4;
console.log(number3 + ">" + number4 + "=" + res1);

let res2 = number3 < number4;
console.log(number3 + "<" + number4 + "=" + res2);

let res3 = number3 >= number4;
console.log(number3 + ">=" + number4 + "=" + res3);

let res4 = number3 <= number4;
console.log(number3 + "<=" + number4 + "=" + res4);

let res5 = number3 == number4;
console.log(number3 + "==" + number4 + "=" + res5);

let res6 = number3 === number4;
console.log(number3 + "===" + number4 + "=" + res6);




// Logical Operator ✅✅✅

let res7 = number1>number2 && number3<number4;
console.log("("+number1+ ">" + number2 + ")&&("+ number3 + "<" + number4 + "):" + res7);

let res8 = number1>number2 || number3<number4;
console.log("("+number1+ ">" + number2 + ")||("+ number3 + "<" + number4 + "):" + res8);



// 3. Ternary Operator ✅✅✅


let n = 10
res = n >= 0 ? "positive number" : "negative number";
console.log(n + " is " + res);



