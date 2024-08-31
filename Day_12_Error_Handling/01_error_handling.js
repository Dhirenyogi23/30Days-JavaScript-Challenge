
// Activity 1: Basic error handling with try-catch ✅✅



// Tak 1:

function throwError(){
    throw new Error("this is an intentational error.")
}

try {
    throwError()
} catch (error) {
    console.log('error message : ', error.message)
}



// Task 2:


function divide(a, b){

    if(b===0){
        throw new Error("can't divide by zero.")
    }

    return a/b
}

try{
    console.log(divide(4, 0))
}
catch(error){
    console.log('error message : ', error.message)
}



// Activity 2: finally Block  ✅✅



// Task 3:


try{
    console.log("inside try block")
    throw new Error("something went wrong")
}
catch(error){
    console.log('error message:', error.message)
}
finally{
    console.log("this is finally block. this is a default behaviour.")
}



// Activity 3: custom Error objects ✅✅


// Task 4:


class customError extends Error{
    constructor(message){
        super(message)
        this.name = "customError"
    }
}

function thowCustomError(){
    throw new customError("this is a custom error")
}

try{
    thowCustomError();
}
catch(error){
    console.log(`${error.name}:  ${error.message}`)
}




// Task 5:


class validationError extends Error{
    constructor(message){
        super(message)
        this.name = 'validationError'
    }
}

function validateInput(input){
    if(!input){
        throw new validationError("input cannot be empty");
    }
    return `valid input: ${input}`;
}

try{
    console.log(validateInput(""));
}
catch(error){
    console.log(`${error.name}: ${error.message}`)
}




// Activity 4: Error Handling in promises. ✅✅


// Task 6:


const randomPromises = new Promise( (resolve, reject) => {
    const random = Math.floor(Math.random() * 10)

    if(random>=5){
        resolve(`success!  ${random}`)
    }
    else{
        reject(`failed! ${random}`)
    }
})


randomPromises
.then( (message) => {
    console.log(message)
})
.catch( (error) => {
    console.log(error)
} )



// Task 7:


async function handleRandomPromise() {
    try {
        const message = await randomPromises
        console.log(message)
    } 
    catch (error) {
        console.log('error', error)
    }
}

handleRandomPromise()




// Activity 5: Graceful Error Handling in fetch 


// Task 8:


fetch("https://invalidurl.com")
.then( (response) => {
    response.json()
} )
.catch( (error) => {
    console.log('fetch error', error)
} )



// Task 9:


async function fetchData() {
    try{
        const message = await fetch("https://invalidurl.com")
        const data = await message.json()
        console.log(data)
    }
    catch(error){
        console.error('error fetching data: ', error)
    }
}

fetchData();

