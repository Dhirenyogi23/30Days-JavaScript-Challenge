// ** Objects.✅✅


// Activity 1: Object Creation and Access.✅✅



// - Task 1: Create an object representing a book with properties like title, author and year and log the object to the console.

const book = {
    title : "Wings Of Fire",
    author : "ABJ Abdul Kalam",
    year   :  1999
}

console.log(book);  // Print the hole object.




// - Task 2: Access and log the title and author properties of the book1 object.

const book1 = {
    title : "Wings Of Fire",
    author : "ABJ Abdul Kalam",
    year   :  1999
}
console.log(book1.title);  // print title property value of book1 object.
console.log(book1.author); // print author property value of book1 object.



//******************************************************************* */


// Activity 2: Object Method.✅✅




// - Task 3: Add a method to the book2 object that return a string with the books title and author, log the result of calling this method.

const book2 = {
    title : "Wings Of Fire",
    author : "ABJ Abdul Kalam",
    year   :  1999
}

book2.getDetails = function(){
    return `${this.title} is written by ${this.author}`;
}

console.log(book2.getDetails());




// - Task 4: Add a method a book3 object that take a parameter (year) and update the book3 year property and log the updated object.

const book3 = {
    title : "Wings Of Fire",
    author : "ABJ Abdul Kalam",
    year   :  1999
}

book3.updateYear = function(year){
    this.year = year;
}

book3.updateYear(2024); // update the year
console.log(book3);     // print the book3 object with updated year



// **************************************************************************



// Activity 3: Nested Objects.✅✅



// - Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
    name: "Internet Library",
    books: [
        {
            title: "Clean Code",
            author: "Robert Cecil Martin",
            year  : 2012
        },

        {
            title: "The programetic programming",
            author: "Dave Thomas",
            year  : 1999
        }
    ]
};

console.log(library);  // Print whole library object.
 


// - Task 6: access and log the name of the library1 and the tile of all books in the library1.


const library1 = {
    name: "Internet Library",
    books: [
        {
            title: "Clean Code",
            author: "Robert Cecil Martin",
            year  : 2012
        },

        {
            title: "The programetic programming",
            author: "Dave Thomas",
            year  : 1999
        }
    ]
};

console.log(`Library name is : ${library1.name}`);  // it prints the name of library

library1.books.forEach((books)=>{
    console.log(books.title);    // it prints the title of books in the library.

})



//*********************************************************************** */



// Activity 4: The `This` keyword.✅✅


// - Task 7: Add a method to the book4 object that uses the `This` keyword to return a string with the book4's title and year, and log the result of calling this method.

const book4 = {
    title : "Wings Of Fire",
    author : "ABJ Abdul Kalam",
    year   :  1999
}

book4.getTitleYear = function(){
    return `${this.title} -> book published in -> ${this.year}`;
    // add this function as a method to the book4.
}

console.log(book4.getTitleYear());  // Print title and year in a single string.




//*************************************************************************** */



// Activity 5: Object Iteration.✅✅



// - Task 8: Use a for..in Loop to iterate over the properties of the book5 object and log each property and it's value.


const book5 = {
    title : "Wings Of Fire",
    author : "ABJ Abdul Kalam",
    year   :  1999
}

for (const property in book5) {
    console.log(`${property}  ${book5[property]}`) // print book5 obj keys and values
}



// - Task 9: use `object keys` and `object value` method to log all the keys and values of th book6 object.

const book6 = {
    title : "Wings Of Fire",
    author : "ABJ Abdul Kalam",
    year   :  1999
}

console.log("keys", Object.keys(book6));      // print book6 object all keys.
console.log("values", Object.values(book6));  // print book6 object all values.


