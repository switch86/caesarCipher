var readline = require('readline-sync');

var input = readline.question('What phrase would you like to encrypt? ');

var shift = parseInt(readline.question('How many letters would you like to shift? (must be a number 1-26) : '));

let newString 
const alphabetCap = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
const alphabetLow = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
function cipher() {

    let chars = input.split("")
    
    chars = chars.map(char => {
        if (alphabetCap.includes(char)) {
            let i = alphabetCap.indexOf(char)
            i = i + shift
            if (i < 0) {
                i = i + 26
            } else if (i > 25) {
                i = i - 26
            }
            char = alphabetCap[i]
        } 
        if (alphabetLow.includes(char)) {
            let i = alphabetLow.indexOf(char)
            i = i + shift
            if (i < 0) {
                i = i + 26
            } else if (i > 25) {
                i = i - 26
            }
            char = alphabetLow[i]   
        } 
        return char
    })
    
    newString = chars.join("")   
    console.log(newString)
}

function reverseCipher() {
    let chars = newString.split("")
    
    chars = chars.map(char => {
        if (alphabetCap.includes(char)) {
            let i = alphabetCap.indexOf(char)
            i = i - shift
            if (i < 0) {
                i = i + 26
            } else if (i > 25) {
                i = i - 26
            }
            char = alphabetCap[i]
        } 
        if (alphabetLow.includes(char)) {
            let i = alphabetLow.indexOf(char)
            i = i - shift
            if (i < 0) {
                i = i + 26
            } else if (i > 25) {
                i = i - 26
            }
            char = alphabetLow[i]   
        } 
        return char
    })
    newString = chars.join("")
    console.log(newString)
}
cipher()
reverseCipher()