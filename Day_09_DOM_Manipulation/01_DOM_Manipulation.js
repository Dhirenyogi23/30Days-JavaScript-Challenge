

// Activity 1: selecting and manuplating element ✅✅


// task 1 : 

let changeText = document.getElementById('changeText')
changeText.innerHTML = 'changed the context'


// task 2 :

let bgChange = document.querySelector('.bgColorChange')
bgChange.style.backgroundColor = 'purple'



//********************************************* */


// Acivity 2:  creating and appending element  ✅✅


// task 3 :

const newDiv = document.createElement('div')
newDiv.textContent = 'here is create element'
document.body.appendChild(newDiv)


// task 4 :

const newLi = document.createElement('li')
newLi.textContent = "newlist"
document.querySelector('ul').appendChild(newLi)


//****************************************************** */



// Activity 3 : Removing element.  ✅✅


// task 5 :

const elemtRemove = document.getElementById('removeMe')
elemtRemove.parentNode.removeChild(elemtRemove)



// task 6 :

const parentElement = document.getElementById('parentElement')
parentElement.removeChild(parentElement.lastChild)



//  Activity 4 : Modify attribute and class  ✅✅



// task 7 : 

const image = document.querySelector('.firstImage')
image.src = './changedImage.png'


// task 8 : 

const myElement = document.querySelector('.elem')
myElement.classList.add("addClass")
myElement.classList.remove("removeClass")



// Activity 5 : Event Handling   ✅✅


// task 9 : 

const btn = document.querySelector('button')
btn.addEventListener('click', ()=>{
    document.querySelector('p').textContent = 'button clicked'
})


// task 10 : 

const hover = document.querySelector('.hoverElement')
hover.addEventListener('mouseover', () => {
    document.querySelector('.hoverElement').style.borderColor = "red"
})