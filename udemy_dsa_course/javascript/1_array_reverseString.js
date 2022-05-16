// Solution 1:
let reverse = (str) => {
  // validate input
  if (!str && str.length < 2 && typeof str !== "string") {
    return "not valid string!";
  }

  let reverseString = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString.push(str[i]);
  }
  return reverseString.join("");
};

// Solution 2:
let reverse2 = str => str.split('').reverse().join('');

console.log(reverse2("Hello world!"));
