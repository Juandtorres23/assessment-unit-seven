// 1. Sum Zero

const addsZero = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++) {
            // console.log(i, x)
            if (arr[i] + arr[x] === 0) {
                return true
            }
        }
    }
    return false
}

console.log(addsZero([10, 20, 14, -14, 15])) 
//Runtime of 2n → O(n) = O(n2) Quadratic Time - Quadratic Space


// 2.Unique Characters

const checkUniqueChar = word => {
    let wordArr = word.split('')
    // console.log(wordArr)
    for(let i = 0; i < wordArr.length; i++) {
        // console.log(i)
        for(let x = i + 1; x < wordArr.length; x++) {
            // console.log(x)
            if(wordArr[i] === wordArr[x]) {
                return false
            }
        }
    } return true
} 
    
console.log(checkUniqueChar('banana'))
//Runtime of 2n → O(n) = O(n2) Quadratic Time - Quadratic Space

// 3. Pangram Sentence

const isPangram = str => {
    let arrStr = str.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for(let i = 0; i < alphabet.length; i++) {
        if (arrStr.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("This is not a pangram"))
// Runtime of  O(n!) - Factorial Time - Linear Space 

// 4. Longest Word
let sentence = 'I love to code every time !'

const findLongestWord = str => {
    let splitStr = str.split(' ');
    let longestWord = 0;
    for(let i = 0; i < splitStr.length; i++) {
        if(splitStr[i].length > longestWord) {
            longestWord = splitStr[i].length;
        }
    }
    return longestWord;
}

console.log(findLongestWord(sentence))
//Runtime of O(n) Linear Time - Linear Space 