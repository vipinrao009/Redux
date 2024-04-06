import { compose } from 'redux'

// It is use for removing the space 
function removeSpace(string){
    return string.split(" ").join("")
}

// It is use for repeating the string
function repeatString(string){
    return string + string // can also use string.repeat(2)
}

//Used for converting the uppercase 
function convertToUppercse(string){
    return string.toUpperCase()
}

const input = "abc abc"

// console.log(convertToUppercse(repeatString(removeSpace(input))));

const composeFunction = compose(removeSpace,repeatString,convertToUppercse)

console.log(composeFunction(input));