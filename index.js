
const capitalize = (string) => {
    let firstLetter = string[0].toUpperCase()
   return string.replace(string[0], firstLetter)
}

const reverse = (string) => {
    return string.split("").reverse().join("")
}

const Calculator = {
    add: (x, y) => {
        return x+y
    },
    subtract: (x, y) => {
        return x-y
    },
    divide: (x, y) => {
        return x/y
    },
    multiply: (x, y) => {
        return x*y
    }
}

const caesersCipher = (string) => {
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
string = string.toLowerCase()
let value = "";
    for (let letter of string) {
        const index = alphabet.indexOf(letter) + 1 || 0
        let val = alphabet[index] || alphabet[0]
        value+= val
    }
    return value;
}

const analyzeArray = (arr) => {
    return {
        average: Math.floor(arr.reduce((a, i) => a + i, 0) / arr.length),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}

export default {
    capitalize,reverse,Calculator,caesersCipher,analyzeArray
}