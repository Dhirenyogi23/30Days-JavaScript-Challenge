
// Activity 1: Array Creation and Access.✅✅


// - Task 1: Create an array of numbers 1 to 5 and log the array to the console.

let array = [1,2,3,4,5];
console.log(array);

console.log("***** Task 1 is Ended Here.**********")



// - Task 2: Access the first and last element of the array and log them to the console


let arr = [1,2,3,4,5,6,7,8,9];

//** This is First Method. */

let firstArr = arr[0];
let lastArr = arr[arr.length-1];
console.log("This is the first Array", firstArr);
console.log("This is the last Array", lastArr);


//** This is Second Method. */
console.log("This is first number ",arr[0], " and last number is", arr[arr.length-1]);


console.log("******* Task 2 is Ended Here.*******");



//********************************************************************** */




// Activity 2: Array Method Basic.✅✅


// - Task 3: Use the `push` Method to add a new number to the end of the array and log the updated array.


let arr1 = [1,2,3,4,5];
console.log("This is before Push :", arr1)
arr1.push(6); // it add the element of array from last.
console.log("This is after Push :", arr1);

console.log("********* Task 3 is Ended Here.*********");



// - Task 4: use the `pop` Method to remove a new number to the end of the array and log the updated array.

let arr2 = [1,2,3,4,5];
console.log("This is before pop :", arr2);
arr2.pop(); // it removes the element of array from last.
console.log("This is after pop :", arr2);

console.log("******** Task 4 is Ended Here.**********");



// - Task 5: Use the `shift` Method to remove the first element from the array and log the updated array.

let arr3 = [0,1,2,3,4,5];
console.log("This is before shift :", arr3);
arr3.shift();
console.log("Thid is after shift :", arr3);

console.log("******* Task 5 is Ended Here.**********");



// - Task 6: Use the `unshift` Method to add the first element from the array and log the updated array.

let arr4 = [2,3,4,5];
console.log("This is before unshift :", arr4);
arr4.unshift(1);
console.log("This is after unshift :", arr4);


console.log("****** Task 6 is Ended Here.***********");


//************************************************************ */


// Activity 3: Array Method (Intermediate) ✅✅


// - Task 7: use the `map` Method to create a new array where each element is doubled and log the new array.

let arr5 = [1,2,3,4];
console.log(arr5);

let doubleElement = arr5.map((num) =>{
    return num * 2
})
console.log("This is double of the array :", doubleElement);


console.log("******* Task 7 is Ended Here.*********");



// - Task 8: Use the `filter` Method to create a new array with only even number and log the new array.

let arr6 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr6);

let evenNum = arr6.filter((num)=>{
    return num%2 == 0;
})

console.log("This is Even Number: ", evenNum);


console.log("******* Task 8 is Ended Here.***********");



// - Task 9: Use the `reduce` Method to calculate the sum of all numbers in the array and log the result.


let arr7 = [1,2,3,4,5];
console.log(arr7);

let sumOfAll = arr7.reduce((acc,num )=>{
    return acc + num
},0)

console.log("The sum of all array :", sumOfAll);


console.log("******* Task 9 is Ended Here.******");



//************************************************************* */


// Activity 4: Array Iteration ✅✅


// - Task 10: use a `for` loop to iterate over the array and log each element to the console.


let arr8 = [1,2,3,4,5,6,7,8];
console.log(arr8);

for (let i = 0; i < arr8.length; i++) {
    console.log(arr8[i]);
    
}

console.log("******** Task 10 is Ended Here.**********");



// - Task 11: Use the `forEach` Method to iterate over the array and log each element to the console.

let arr9 = [1,2,3,4,5,6,7,8,9];

arr9.forEach((num) => {
    console.log(num);

});

console.log("****** Task 11 is Ended Here.********");


//**************************************************************** */


// Activity 5: Multi-Dimensional Array.✅✅



// - Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

 console.log(matrix);

 console.log("********* Task 12 is Ended Here.*********");




 // - Task 13: Access and log the specific element from the two-dimesional array.


 let matrix2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

 let specificElement = matrix2[0][2];
 console.log(specificElement);


 console.log("********** Task 13 is Ended Here.*********");