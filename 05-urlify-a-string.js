// A common mistake users make when they type in an URL is to put spaces between words or letters. 
// A solution that developers can use to solve this problem is to replace any spaces with a %20. 
// Write a method that takes in a string and replaces all its empty spaces with a %20. 
// Your algorithm can only make 1 pass through the string. 
// Examples of input and output for this problem can be.

// Input: tauhida parveen
// Output: tauhida%20parveen
// Input: www.thinkful.com /tauh ida parv een
// Output: www.thinkful.com%20/tauh%20ida%20parv%20een

const noSpace = (string) => {
    return string.trim().replace(/\s/g, '%20');
}

console.log(noSpace("tauhida parveen"))
console.log(noSpace("www.thinkful.com /tauh ida parv een"))

// The trim() method removes whitespace from both sides of a string.
// The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
// /\s/g is a regular expression where the \s means "match whitespace" and the g is a flag which means "global", i.e. match all whitespace, not just the first.

// Time complexity: O(n)
// Space complexity: O(n) where n is the number of characters in the string. An additional factor could include the number of spaces in the string.


