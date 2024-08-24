

// Activity 1 :  Basic Event Handling  


// Task 1 :

const btn = document.getElementById('changeTextBtn')
btn.addEventListener('click', function(){
    document.getElementById('text').textContent = 'text changed'
})


// Task 2 : 


document
.getElementById('toggleImage')
.addEventListener('dblclick',function(){
this.classList.toggle('hidden')
})



// Activity 2 : Mouse Event



// Task 3 : 

document
.getElementById('colorBox')
.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'gray'
})


// Task 4 : 

document
.getElementById('colorBox')
.addEventListener('mouseout', function(){
    this.style.backgroundColor = "darkgray"
})



// Activity 3  :  Keywords Events



// Task 5 :

document
.getElementById('keyInput')
.addEventListener('keydown', function(event){
    console.log(`key pressed , ${event.key}`)
})



// Task 6 :

document
.getElementById('keyInput')
.addEventListener('keyup', function(value){
    document.getElementById('displayValue').textContent = `${this.value}`
})



// Activity 4 :  Form event 



// Task 7 : 

document
.getElementById('userForm')
.addEventListener('submit', function(event){
    event.preventDefault();
    const formData = new FormData(this)
    for(let [key, value] of formData.entries()){
        console.log(`${key} => ${value}`)
    }
})




// Task 8 :

document
.getElementById('selectDropdown')
.addEventListener('change', function(){
    document.getElementById('displaySelectedValue')
    .textContent = `Selected value =>  ${this.value}`
})



// Activity 5 : Event Deligation



// Task 9 :

document
.getElementById('myList')
.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        console.log(`clicked item ${event.target.textContent}`);
    }
})



// Task 10 :

document
.getElementById('addItemBtn')
.addEventListener('click',function(){
    const newItem  =document.createElement("li")
    newItem.textContent = `item ${document.getElementById('myList').children.length + 1}`
    document.getElementById("myList").appendChild(newItem);
})

