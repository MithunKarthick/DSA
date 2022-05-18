// Longest Word

// Have the function LongestWord(sen) take the sen parameter being 
// passed and return the longest word in the string. If there are two or more words that 
// are the same length, return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty. Words may also contain numbers, 
// for example "Hello world123 567"
// Examples

// Input: "fun&!! time" 
// Output: time
// Input: "I love dogs" 
// Output: love

// Solution 1:
let longestString = (sen) => {
    let array = sen.split(" ");
    let maxLength = 0;
    array.forEach(element => {
        element = element.replace(/[^\w\s]/g,'');
        if (element.length > maxLength) {
            maxLength = element.length;
            sen = element;
        }
    });
    return sen;
}

let sen = "fun&!! time";
console.log(longestString(sen));
