
// Activity 1: Understanding promises. ✅✅


// Task 1:

const promisesResolved = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promises resolve after two seconds")

    }, 2000);
})

promisesResolved.then((message)=>{
    console.log(message)
})



// Task 2:


const promiseReject = new Promise((resolve, reject) => {
    setTimeout( ()=> {
        reject("your promises is rejected after 2 second")
    }, 2000)
})

promiseReject.catch((error) => {
    console.log(error)
})




// Activity 2: Chaining promises. ✅✅


// Task 3:


const fetchData = (data, delay) => {
    return new Promise( (resolve, reject) =>{
        setTimeout( () => {
            console.log(`fetched : ${data}`)
            resolve(data)
        }, delay )
    } )
}

fetchData( "data 1", 1000)

.then( () => {
    fetchData( "data 2", 1000)

} )
.then( () => {
    fetchData( "data 3", 1000)

} )
.then( () => {
    fetchData( "data 4", 1000)
} )




// Activity 3: Using Async and Await. ✅✅


// Task 4: 


const asyncFunc = async () => {
    const promise =  new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("resolved value")
        }, 2000 )
    } )
    
    const result = await promise;
    console.log(result)
}

asyncFunc();



// Task 5:

const asyncFuncWithError = async () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout( () => {
            reject("rejected value")
        },2000 )
    })

    try {
        await promise
    } catch (error) {
        console.log(error)
    }
}

// asyncFuncWithError()



// Acivity 4: Fetching data from an api ✅✅


// Task 6: 


fetch("https://fakestoreapi.com/products")
.then((response) =>{
    return response.json()
})
.then( (data) => {
    console.log(data)
} )
.catch( (error) => {
    console.log(`error : ${error}`)
} )



// Task 7:


const fetchDataAsync = async () => {
    try{
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json();
        console.log(data)
    }
    catch(error){
        console.log("error", error)
    }
}

fetchDataAsync()






//  Activity 5: concurrent Promises ✅✅


// Task 8: 


const promise1 = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve("promise 1 resolved")
    }, 1000 )
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 2 resolved")
    }, 2000);
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 3 resolved")
    }, 3000);
})


Promise.all([promise1, promise2, promise3]).then((data) => {
    console.log(data);
})




// task 9:


promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 4 resolved")
    }, 1000);
})

promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 5 resolved")
    }, 2000);
})

promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 6 resolved")
    }, 500);
})

Promise.race([promise4, promise5, promise6]).then((data) => {
    console.log(data)
})


