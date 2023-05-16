console.log('hello world')//testing js link
// this is a comment
/*
multi line comment
*/

// var, let , const -3 variables

//declare a variale
var firstName;

console.log(firstName);

firstName = 'karina'
console.log(firstName)

//bad practice declaring var
var firstName = 'sean'
console.log(firstName)
//declaring without keyword - bad practice
lastname = 'currie'
console.log(lastname)

//declare a string
var string1 = 'this is a string'
var string3 = 'this is sean\'s string'

//concat sting
var joinedString = string1 + '!'
console.log(joinedString)
var fullName = firstName + ' ' + lastname
console.log(fullName)

console.log(firstName, lastname)

//indexing-1st element of string=s
fullName[0]
console.log(fullName[0])
//cant use negatie indexes get undefined
console.log(fullName[-1])
//instead of index out of range you will get undefines
console.log(fullName[100])

//play with string methods
//different syntax

//string methods
//upper syntax
console.log(fullName.toUpperCase())
//lower syntax
console.log('IM NOT YELLING'.toLowerCase())
//=Sean currie
console.log(fullName[0].toUpperCase() + fullName.substring(1,11))

//length property
//length of full string
console.log(fullName.length)

// string slicing similar to [::]
// .slice(<startIndex>,<endIndex>)
console.log('karina quenta'.slice(0,6))

var myName = 'karina quenta'
var slicedName = myName.slice(0,6)
var subStringName =myName.substring(0,7)
console.log(myName.slice(0,6))
//out of place, string are immutable
console.log(myName)
//using negative index
console.log(myName.slice(-7,-1))

var compoundString = 'welcometojavascript'
console.log(compoundString.slice(7,9))

//replacing a substring
var marriedName = myName.replace('quenta','sebastian')//own return obj
console.log(myName)

//template literal aka formatted string
var congratsString = `Congrats on the marriage ${marriedName}`
console.log(congratsString)
console.log(`Dear whoever
Greetings!
Sincerely

`)

var multiVars = `Your instructors ${fullName} and ${myName}` 
console.log(multiVars)

//creat 3 variables each being different info about your bf
//create a template literal include all 3 variables

var statement1=`kind`
var statement2=`honest`
var statement3='fun'
var string = `My bestie is ${statement1},${statement2}, and most of all ${statement3}!`
console.log(string)

//finding type of data or variable
//types
console.log(typeof multiVars)

//array is an object
console.log(typeof [])
console.log(typeof 12)
console.log(typeof 12.78)

//math operations
console.log(5+5)
console.log(10-5)
console.log(10*10)
console.log(12/6)
console.log(10**2)
console.log(11 % 2)
//florr div use math lib

console.log(Math.floor(11/2),'mathfloor')

var num = 10
console.log(num*=2)
console.log(num)

var num2 = 100
num2 /=25

//incrementing by 1
num+=1
console.log(num)
num++
console.log(num)
++num
console.log(num)
console.log(num++)
console.log(num)
console.log(++num, 'test')
console.log(num)

//decrement by 1
var newNum = 10
newNum-- //numnum = numnum-1
console.log(newNum)
--newNum
console.log(newNum)
console.log(newNum--)
console.log(newNum,'after decrement')
console.log(--newNum)
console.log(newNum)

//type conversion
//str-> number
var strNum = '123'
var numberNum = parseInt(strNum)
console.log(numberNum,typeof numberNum)

var decimalStr = '12.5'
console.log(parseInt(decimalStr))
//keep digits after decimal
console.log(parseFloat(decimalStr))

//number -> string
var myNum = 100
var numbers = myNum.toString()
console.log(numbers,typeof numbers)

// '3.14' + 4
console.log(parseFloat('3.14') + 4)

//Boolean-lowercase
var bool1 = true
console.log(typeof true)

//comparisons
console.log(2>1)
console.log(1<2)
console.log(2>=3)
console.log(2<=2)
console.log(1 == '1', 'not strict') //only check values not data types
console.log(1 === '1', 'strict') //has to be same type
console.log('1' === '1')

//negating booleans

console.log(1 !== 2)
console.log(!10 > 11)
console.log(!true)
console.log(!false)

console.log(Boolean(''))
console.log(Boolean(12))
console.log(Boolean(0))
//membership check on empty objects return true
console.log(Boolean([]))
console.log(Boolean({}))

//chaining conditions
// || == or in python
console.log('=============', 'testing or')
console.log(true || false)
console.log(false || true)
console.log(false || false)
console.log(true || true)

// and is &&
console.log(true && false)
console.log(false && true)
console.log(false && false)
console.log(true && true)

//short circuit
function one() {
    console.log('one ran')
    return true
}

function two() {
    console.log('two ran')
    return false
}

function three() {
    console.log('three ran')
    return true
}

one() && two() && three()
one() || two() || three()

// null vs undefined
//both falsey
var noValue
console.log(noValue)

var myNull = null
console.log(typeof myNull)

noValue || myNull || one()

//let and const
//let means declare a variable and change later
//const means u cant reassign to new value
//neither will declare var
var myNull = true
console.log(myNull)

let myLet ='let'
//let myLet = 'test'
myLet = 'update'
console.log(myLet)

let test;

test = 'test'

//const
const myconst = 'const'
//breaks
//myConst += 'test'
//console.log(myConst)

if (true) {
    let blockVariable = 'test var'
    console.log(blockVariable)
}

if (true) {
    const blockVariable2 = 'test const'
    console.log(blockVariable2)
}
//var is not block scoped
if (true) {
    var blockVariable3 = 'test var'
    console.log(blockVariable3)
}
//console.log(blockVariable)
console.log(blockVariable3)

//array like list in python, array is an object
//empty arrays-2 ways
let myArray = []
let myArray2 = new Array()
console.log('------------- workin with arrays')
//array with elements
const filledArray = [1,2,3,'a','b','c']
console.log(filledArray[3])
console.log(filledArray[0])
//undefined
console.log(filledArray[100])
console.log(filledArray.length)
//appending to the end of the array .push()
myArray.push('sean')
console.log(myArray,myArray.length)
//push returns new length
console.log(myArray.push('dylan'))
//can add multiple elements at once
console.log(myArray.push('gian','todd','alec',[1,2,3]))
console.log(myArray)

let myPop =myArray.pop()
console.log(myPop,myArray)

filledArray.pop()
console.log(filledArray)
//destructuring
console.log('========== destrucuting')
console.log(myArray)
//assign the variables
const[instructorOne,instructorTwo,studentOne,studentTwo,studentThree]=myArray
console.log(myArray)
console.log(instructorOne,instructorTwo,studentThree)
//grouping students-rest operator
const[teacherOne,teacherTwo,...students]=myArray
console.log(teacherOne,students)

//additional destructutin and rest operator
const[newOne,newTwo,,four,...fiveAndSeven]=[1,2,3,4,5,7]
console.log(newOne,four,fiveAndSeven)

//spread operator
console.log(...students)

//push adds to end of list but we can put beg of list .unshift()

students.unshift('khoa')
//can add multiple
students.unshift('david','chris')
console.log(students)
//remove from beg of list .shift()
students.shift()
console.log(students)

//index of for array shift of
console.log(students.indexOf('todd')) //returns position of that element
//returns -1 if the value is not present
console.log(students.indexOf('test'))

//map filter reduce
//array.methods(<function>)
//arrow function, call back 
//map takes a function and runs loop and function on each element
//each student in array title case it.map gives us a new array
console.log(students.map((student)=>{
    return student.toUpperCase()
}))
console.log(students.map((student)=> student.toUpperCase()))

//.filter-i want specific elements in my array
console.log(students.filter((student)=> student.length ===4))

//reduce method like sum
//creat our own sum function, take elemts in list and accumulate ele
//acc means accumulator, 2 parameters
console.log([12,3,4,5].reduce((acc,num)=> acc+num))

console.log([12,3,4,5].reduce((acc,num)=> {
    console.log(acc,num)
    console.log(acc+num)
    return acc+num
}))
//seans ex
let numberss = [1, 2, 3, 4, 5];

let sum = numberss.reduce(function(acc, currentNumber) {
  return acc + currentNumber;
}, 0);

//join
console.log(students.join(','))

//slicing same as student[1:4] in python
console.log(students.slice(1,4))

//.splice - an array method, in place
//splice in or add 
//.splice(<startingIndex,how many elements to remove,optional element to add)
console.log(students.splice(2,3,'karina'))
console.log(students)

console.log(students.splice(0,1))
console.log(students)

//add fav food to beg and end of list, cant change objects inside array
const favFoods = ['sushi','pizza','tacos']
favFoods.unshift('cheeseburgers')
favFoods.push('pho')
console.log(favFoods)

//functions

/*
traditional syntax
function nameofFunc(<parameters>){all the code in our function}

ES6 new version of javascript - arrow function
const <nameofFunc = () => {}
*/
//example hoisted-console.log(addNums(10,15))
//hoisted
function addNums(num1,num2){
console.log(num1,num2)
return num1 + num2
}

console.log(addNums(10,15)) //called function before our code, read thru file before executing code, will hoist every variable in memory
//not hoisted
const arrowAddNums = (num1, num2) => {
return num1+num2
}
console.log(arrowAddNums(10,10)) 
//arrow function with 1 param, no parenthese
//implicit
//sincel op which is the return we can include return on the same line with no return keyword
const greeting = name => `hello ${name}`

console.log(greeting('sean'))

function addMultipleNums(num1,num2,num3){
    return num1 + num2 + num3
}
const randomNums=[10,4,5]
console.log(addMultipleNums(12,1,5))
console.log(addMultipleNums(randomNums[0],randomNums[1],randomNums[2]))
console.log(addMultipleNums(...randomNums))

function addManyNumbers(...numbers){
    console.log(numbers)
    return numbers.reduce((acc,num)=> acc + num)
}
console.log(addManyNumbers(10,4,9,10))
console.log(addManyNumbers(...randomNums))

//conditionals-conditional() then code block in {}
//if (){} syntax
//if () {}else{} syntax
//if () {}else if{} elsesyntax

if(10 >11){
    console.log('10 > 11')
} else if (100==="100"){
    console.log('same data types')
} else {
    console.log("running else action")
}
//1 style of looping
//for loop
//traditional syntax
//for (boundary of 4loop;index; condition to loop; incrementer) {}

for(let i=0;i<1; ++i){
    console.log(`i=${i} first loop`)
}
for(let i=0;i<10; i+=2){
    console.log(`i=${i}`)
}
//for ( initialization ; condition ; final-expression){
//    Statement
//}
for(let i =0;i<students.length;i++){
    console.log(students[i])
}

for (let student of students){
    console.log(student)
}