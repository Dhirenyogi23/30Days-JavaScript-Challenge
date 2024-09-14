
/ * Activity 3: Importing Entire Module * /

//* Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties. */

console.log("Importing from Constants.js");

import * as constants from './Constants.js';

console.log(`PI: ${constants.PI}`);
console.log(`E: ${constants.E}`);

console.log(constants.square(4));
console.log(constants.cube(3));