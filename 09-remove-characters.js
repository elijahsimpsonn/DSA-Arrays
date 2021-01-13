// Write an algorithm that deletes given characters from a string. 
// For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", 
// The algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". 
// Do not use Javascript's filter, split, or join methods.


// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'


// Time complexity is O(n)
const removeMe = (str, remove) => {
    const removeObject = {}

    for(let i = 0; i < remove.length; i++) {
        const char = remove[i]
        removeObject[char] = true
    }

    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        const lowerCaseChar = char.toLowerCase()
        let shouldAdd = !(lowerCaseChar in removeObject)
        if (shouldAdd) {
            result += char
        }
    }
    return result
}

const input = 'Battle of the Vowels: Hawaii vs. Grozny'
const vowels = 'aeiou'

console.log(removeMe(input, vowels))


//-----------//

// Time complexity is O(n*m)
function removeCharacters(input, remove) {
    if (input.length === 0) {
      return '';
    };
    if (!remove.includes(input[0])) {
      return input[0] + removeCharacters(input.slice(1), remove);
    } else {
      return removeCharacters(input.slice(1), remove);
    }
  }; 

