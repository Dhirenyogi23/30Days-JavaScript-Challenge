 
 // Activity 1: Function Decleration.✅✅

 // - Task 1: Write a program to check if a numer is even or odd and log the result to the console.


 function oddEvenCheck(num) {
    if(num%2 == 0 && num>0){
        console.log(`${num} : This is Even Number.`)
    }
    
    else if(num%2 !== 0 && num>0){
        console.log(`${num} : This is Odd Number`);
    }

    else if(num%2 === 0 && num<0){
        console.log(`${num} : This is Even Number Also it is Less Than 0.`);
    }

    else if(num%2 !== 0 && num<0){
        console.log(`${num} : This is Odd Number Also it is Less Than 0.`)
    }
 }

 oddEvenCheck(23);

 console.log("******* Task 1 is Ended here. ********");




 // - Task 2: Write a function to calculate the square of a number and return the result.


 function square(num){
        return  num * num;

 }
 console.log(square(10));

console.log("******* Task 2 is Ended Here. **********")



//***************************************************** */



 //  Activity 2: Function Expression.✅✅
 
 
 // - Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.


 function maxNum(num1, num2) {
    if(num1>num2){
        console.log(`num1 = ${num1} => num1 is Greater.`)
    }
    else{
        console.log(`num2 = ${num2} => num2 is Greater.`)
    }
    
 }

 maxNum(100,150);

 console.log(" ****** Task 3 is Ended Here. *********");




 // - Task 4: Write a function expression to concatenate two string and return the result.


 function concatenate(str1, str2) {
        return str1 + str2
 }

 console.log(concatenate("Hello", " Dhiren"));
 console.log(concatenate("Hello", " Chai or Code"));


 console.log("****** Task 4 is Ended Here.*****");



 //******************************************************** */


 // Activity 3: Arrow Function.✅✅



 // - Task 5: Write a Arrow function to calculate the sum of two numbers and return the result.



// 1st method.
 const sum1 = (num1, num2)=>{
    return num1 + num2;
 }
 console.log(sum1(5,5));


// this is second method.
 const sum = (num1, num2)=> num1 + num2;

 console.log(sum(5,4));


 console.log("******* Task 5 is Ended Here.*******");



 // - Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.


 const booleanVal = (str, char)=> str.includes(char);
 console.log(booleanVal("dhiren", "d"));

 console.log("****** Task 6 is Ended Here.********");



//****************************************************** */


// Activity 4: Function parameter and Default Value.✅✅



// Task 7: Write a program that takes two parameter and return their product. Provide a default value for the second parameter

function product(num1, num2="2"){
    return num1 * num2
}
console.log(product(2));
console.log(product(2, 5));


console.log("***** Task 7 is Ended Here.******");



// - Task 8: Write a function that take a person's name and age and return a greeting message. provide a default value for the age.


function greeting(name, age="18"){
    return `Good Morning! ${name} having age of ${age} years old.`;
}

console.log(greeting("Dhiren"));
console.log(greeting("Dhiren", 23));

console.log("******* Task 8 is Ended Here.*******");


//***************************************************** */


// Activity 5: Higher-Order Functions. ✅✅



// - Task 9: Write a higher-order function that takes a function and a number, and call the function that many times. 


function repeatFn(fn, times){
    for (let i = 0; i < times; i++) {
        fn();  
    }
}
function greet(){
    console.log("Hello! ChaiAurCode.");
}

repeatFn(greet, 3);


console.log("**** Task 9 is Ended Here.*******");



// - Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.


function compose(fun1, fun2) {
    return function(val){
        return fun2(fun1(val));
    }
    
}

function double(num){
    return num * 2;
}

function square(num){
    return num **2
}

const allCompose = compose(double, square);

console.log(allCompose(2));
console.log(allCompose(5));


console.log("********* Task 10 is Ended Here. **********");