// using - // we can create comments in js
// DOM - Document Object Model


// creating a variable

// let count = 0
// // using console.log we can print out our variables
// console.log(count)


// js reads code from top to down therefore referencing a value before initializing will give an error

// let firstBatch = 5
// let count2 = firstBatch
// console.log(count2)
// ctlr+/ for multiple lines convert to comments


// practice 1, making a program which converts human age to dog age

// let humanAge = 35
//
// let dogAge
// dogAge = humanAge*7
// console.log(dogAge)


// reassigning the variable

// let count2 = 5
// console.log(count2)
// count2 = 10
// console.log(count2)


// incrementing variable
//
// count2 = count2 + 1


// prac2

// let bonusPoints = 50
// console.log(bonusPoints)
//
// bonusPoints = 100
// console.log(bonusPoints)
//
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
//
// bonusPoints = bonusPoints+45
// console.log(bonusPoints)

// now we will go to index to html to create a button for counting the people entering
// after that we are going to use onClick to decide what happens after clicking the buttton.
// and assign it "increment", a function we will create in js


// creating a function
// function decrease (){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// decrease()
//
// let lap1 = 34
// let lap2 = 23
// let lap3 = 32
// function totalTime(){
//     let time = lap1+lap2+lap3
//     console.log(time)
// }
// totalTime()


//
let count = 0
// we will now change the number displayed, to do that we will first use a variablo to refer to that via it's id
let countEl = document.getElementById("count-el")
let saveNm = document.getElementById("save-btn")

function increment(){
    count = count + 1
    // using .innerText we are able to modify the text of that element by pressing the increment button
    countEl.innerText = count
    console.log(count)
}

// create a save button and a save function
function save(){
    saveNm = count
    console.log("Total Number of passengers = ",count)
}
