
// Activity 1: If-Else Statements ✅


// - Task 1: Write a program  to check if number is positive, negative, zero and log the result to the console.


let num = 23;

if(num<0){
    console.log(num + " is negative Number");
}
else if(num > 0){
    console.log(num + " is Positive Number");
}
else{
    console.log(num + " is Zero");
}

console.log("****** Task 1 is Ended Here. *******");



// - Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 12;

if(age >= 18){
    console.log("your age is " + age + " you can vote now.");
}
else{
    console.log("Sorry! your age is " + age + " you cannot vote now.");
}

console.log("******* Task 2 is Ended Here. *******");



//************************************************ */


// Activity 2: Nasted If-Else Statements. ✅


// - Task 3: Write  a program to find the largest of three numbers using nested if-else statements.


let firstNumber = 5;
let secondNumber= 20;
let thirdNumber = 50;

if(firstNumber > secondNumber){
    console.log(firstNumber + " is greater number");
}
else if(secondNumber > thirdNumber){
    console.log(secondNumber + " is greater number");
}
else{
    console.log(thirdNumber + " is greater number");
}

console.log("******* Task 3 is Ended Here. **********");



//*********************************************************************** */


// Activity 3: Switch Case ✅


// - Task 4: Write  a program that uses a switch case to determine the day of the week based on a number (1-7) and log the result to the console.

let dayNumber = 8;

switch (dayNumber) {

    case 1:
        dayName = "Sunday";
        break;

    case 2: 
        dayName = "Monday";
        break;

    case 3: 
        dayName = "Tuesday";
        break;

    case 4:
        dayName = "Wednesday" ;
        break;

    case 5:
        dayName = "Thursday";
        break;

    case 6:
        dayName = "Friday";
        break;


    case 7:
        dayName = "Saturday";
        break;


    default:
        dayName = "Invalid Day Name. Please enter valid number";
        break;
}
console.log(dayName);


console.log("********* Task 4 is Ended Here. *********");



// - Task 5: Write a program that uses a switch case to assign a grade ('a', 'b', 'c', 'd', 'f') based on a score and log the result to the console.


let score = 82;

switch (true) {

    case score >= 90 && score <= 100:
        grade = "Your score is: " + score +  " and grade is" +   " A";
        break;

    case score >= 80 && score < 90: 
        grade = "Your score is: " + score +  " and grade is" +  " B";
        break;

    case score >=70 && score < 80:
        grade = "Your score is: " + score +  " and grade is" +   " C";
        break;

    case score >= 60 && score < 70:
        grade = "Your score is: " + score +  " and grade is" +  " D";
        break;

    case score >= 0 && score < 60:
        grade ="Your score is: " + score +  " and grade is" +  " F";
        break;

    default:
        grade = "Invalid Score!. Score should not be less than 0 and greater than 100.";
        break;
}

console.log(grade);


console.log("****** Task 5 is Ended Here. ***********");




//********************************************************************** */



// Activity 4: Conditional (Ternary) Operator.✅



// - Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.


let a = 9;
let res = a % 2 === 0 ? "Even number" : "Odd number";
console.log(a + " This is " + res);

console.log("****** Task 6 is Ended Here. ********");



//********************************************************************** */


// Activity 5: Combining Conditions. ✅


// - Task 7: Write a program to check if a year using multiple condition (divisible by 4, but not 100 unless also divisible by 400 ) and log the result to the console.



 yearCheck = 2000;

let isLeapYear = yearCheck % 4 === 0 && (yearCheck % 100 !== 0 || yearCheck % 400 == 0) ? "Leap Year" : "Not a Leap Year";

console.log(yearCheck + " is " + isLeapYear);


console.log("******** Task 7 is Ended Here. ********");
