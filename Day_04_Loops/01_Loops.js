
// Activity 1: For Loop. ✅✅



// - Task 1: Write  a program to print number from 1 to 10 using for loop.

for (let i = 1; i <= 10; i++) { 
    console.log(i);
}
console.log("******** Task 1 is Ended Here. *********");



// - Task 2: Write a program to print the multiplication of 5 using a for loop.

for (let i = 1; i <= 10; i++) {
   let  MultiplyOf5 = `5 * ${i} = ${5*i}`;
   console.log(MultiplyOf5);   
}
console.log("******** Task 2 is Ended Here. *********");



//***************************************************** */


// Activity 2: While Loop. ✅✅



// - Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sumNum = 0;
let i = 1;

while (i <= 10 ) {
    sumNum = sumNum + i;
    i++;
}
console.log(`The total sum of 1 to 10 is: ${sumNum}`);

console.log("******* Task 3 is Ended Here. **********");



// - Task 4: Write  a program to print numbers from 10 to 1 using a while loop.

let num = 10
while (num >= 1) {
    console.log(num);
    num--;
}

console.log("******* Task 4 is Ended Here. ************");



// - Task 5: Write a program to print number from 1 to 5 using a do...while loop.

i=1;
do {
    console.log(i);
    i++;
} while (i<=5);

console.log("****** Task 5 is Ended Here. **********");



// - Task 6: Write a program to calculate a factorial of a number using a do...while loop.

let number = 3;
let result = 1;
let  index = 1;

do {
    result = result * index;
    index++;
} while (index <= number);

console.log(`The factorial of ${number} is : ${result}`);

console.log("******* Task 6 is Ended Here. ***********");



// - Task 7: Write a program to print a pattern using nested for loop.


for (let i = 1; i <= 5; i++) {
    let StarPattern = "";

    for (let j = 1; j <= i; j++) {
        StarPattern += "*";
        
    }
    console.log(StarPattern);   
}

console.log("****** Task 7 is Ended Here.**********");


// - Task 8: Write  a program to prints number from 1 to 10 but skip the number 5 using the continue statement.


// **  This is first Method.

let I = 0;

while (I < 10) {
    I++;
    if(I == 5){
        continue;
    }
      console.log(I);
      
}


// ** This is second Method.

for (let i = 1; i <= 10; i++) {
    if(i==5){
        continue;
    }
    console.log(i);
    
}

console.log("******** Task 8 is Ended Here. ***********");




// - Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement


// ** This is first method using while loop.

let n = 0;

while (n <= 10) {
    n++;
    if(n === 7){
        break;
    }
    console.log(n);
}


// ** This is second method using for loop.


for (let i = 1; i <= 10; i++) {
    if(i === 7){
        break;
    }
    console.log(i);
    
}

console.log("******* Task 9 is Ended Here.*********");