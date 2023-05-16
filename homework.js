//Homework

//Complete the Following Coding Questions in JavaScript.

//Question #1

//Write a function that takes a string (sentence) and an array of strings 
//(in this example dog_names) and check if one of the list members (dog names) 
//is in the string (sentence). Return an array of the dog names found in the array

function dog_names(string,dogNames){
    const output_dog_name = []
}
for(const name of dogNames){
    if(string.toLowerCase().includes(name)){
        output_dog_name.push(name)
    }
}

var dogNames = ["Max","Fido","Gizmo","Nala"]

//Test Cases
let testString1 = "Hello, my dog is Max, and they have purple eyes!"
//Expect ['Max']
console.log(dog_names(testString1,dogNames))
let testString2 = "My Dog is fast, her name is Tippi"
//Expect []
console.log(dog_names(testString2,dogNames))
let testString3 = "Come here Fido and Gizmo come here"
//Expect['Fido','Gizmo']
console.log(dog_names(testString3,dogNames))
//Question #2

//Write a Function using map to convert an array of number from inches to feet
function convertItoF(heightInInches){
    const heightsInFeet = heightsInFeet.map((height) =>height/12)
    return heightsInFeet
}
//1 foot = 12 inches

const heightsInInches = [66, 64, 60, 52, 72, 80, 51]
// Expect
// [
//   5.5,
//   5.333333333333333,
//   5,
//   4.333333333333333,
//   6,
//   6.666666666666667,
//   4.25
// ]
const heightsInFeet=convertItoF(heigtsInInches)
//Question #3

//Using the Ternary Operator and map create an array that adds is eating pizza to every name from the array tmnt that ends with o and add is being rude to any other name.

const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
// expect
// [
//   'Leonardo is eating pizza',
//   'Michelangelo is eating pizza',
//   'Donatello is eating pizza',
//   'Raphael is being rude'
// ]
function namePizza(tmnt){
    const addedOp = tmnt.map((name) =>
    name.endsWith('o') ? `${name} is eating pizza`: `${name} is rude`
    )
    return addedOp
}
const addedOp = namePizza(tmnt)
console.log(addedOp)
//Question #4

//Write an arrow function to find the max number in a list. Do not use the Math.max Function.

//The List will be all positive numbers

//let findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]
//Expect
// 234125
const findAMax = (list) => {
    let max = list[0]
}

//Question #5

//At the end of the third Iteration (the third time the loop has ran) of this for Loop define the state of all the variables used in the cell

var bingo = "B-I-N-G-O"
var ognib = ""
for(let i=bingo.length-1; i>=0; i--){
    ognib+=(bingo[i])}
    //define state from this line on the third iteration

//bingo value is
"B-I-N-G-O"
//ognib value is
"OGN"
// i value is
2

//Question #6

//Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python. Paste a link hear to the 3 questions you completed
1: https://www.codewars.com/kata/59441520102eaa25260000bf/solutions/javascript?filter=me&sort=best_practice&invalids=false
2: https://www.codewars.com/kata/55685cd7ad70877c23000102/solutions/javascript?filter=me&sort=best_practice&invalids=false
3:https://www.codewars.com/kata/56a4addbfd4a55694100001f/solutions/javascript?filter=me&sort=best_practice&invalids=false
