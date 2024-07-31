
// **  ES6+ Features.


// Activity 1: Template Literals.✅✅



// - Task 1: Use template literals to create a string that includes variables for a person's name and age and log the string to the console.

let name = "Dhiren";
let age = 23;

console.log(`My name is ${name} and i'm ${age} years old.`);  // Print whole Templete literal string



  
// - Task 2: Create a multi-line string using the  templete literals and log it to the console.

const multiLineString = `This is a multiLineString.
This is second string.
This is third string.`;

console.log(multiLineString);  // print whole templete literal string.



//******************************************************************************** */


// Activity 2: Destructuring.✅✅



// - Task 3: Use array destructuring to extract first and second element from an array of numbers and log them in to the console.

let num = [1,2,3,4,5,6,7,8,9];

let last  = num.length - 1;
console.log(last)  // it print the 8.

const [first, second] = num;

console.log(first, second);  //  it print 1 and 2.




// - Task 4: Use Object destructuring to exact title and the autor from a book object and log them in to the console.

const book = {
    title: "Wings of Fire",
    author: "ABJ Abdul Kalam",
    year  : 1999
};

const {title, author, year} = book;

console.log("This is the title->",title);   // it prints the title of the book object.
console.log("This is the author->",author); // it prints the author of the book object.



//************************************************************************************ */



// Activity 3: Spread and Rest Operator.✅✅




// - Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const arr1 = [1,2,3,4,5];
const arr2 = [...arr1, 6,7,8,9];
console.log(arr2);  




// - Task 6: Use the rest operator in a function to accept an arbitrary number of argument, sum them, and return the result.


// ** this is first method.

function sum(...args){
    sum = 0;
    for (const arg of args) {
        sum = sum + arg;
    }
    return sum;
 }
 console.log(sum(1,2,3,4,5));  




 // ** This is Second Method.

function sum(...args) {
    return args.reduce((total, num)=> total + num, 0);
    
}
console.log(sum(1,2,3,4));



//******************************************************************************** */



// Activity 4: Default Parameters.✅✅



// - Task 7: Write a function that takes two parameters and return their product, with the second parameter having a default value of 1. log the result of calling this function with and without the second parameter.

 function multiply(a, b=1){
    return a * b;
 }

 console.log(multiply(4));
 console.log(multiply(5,5));




//****************************************************************************** */


 
// Activity 5: Enhanced Object Literals.✅✅



// - Task 8: Use Enhnaced Object Literals to create an object with methods and properties, and log the object to the console.

const Name = "Dhiren";
const Age = 23;
const Role = "Web Developer";

const person = {
    Name,
    Age, 
    Role,

    greet(){
        console.log(`Hello My Name is ${Name} i am ${Age} years old. i am  ${Role}.`)
    }
} 

console.log(person);  // it print the object of person.
person.greet();       // it print method value of the object.





// - Task 9: Create an object with computed  property name based on variables and log the object to the console.


const propName = "Name";
const obj = {
    [propName] : "Hello my name is Dhiren."
}

console.log(obj[propName]);

















