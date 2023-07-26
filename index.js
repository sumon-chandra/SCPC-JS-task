// Task 01: Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. Example Input: "hello world" Example Output: "dlrow olleh"
function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
// console.log(reverseString("Hello, world"));

// Task 02: Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. Example Input: [2, -5, 10, -3, 7] Example Output: 19
function SumOfNumbers(array) {
  const ans = array.reduce((pre, n) => pre + (n >= 0 && n), 0);
  return ans;
}
const result = SumOfNumbers([1, 3, -4, 5, -2, -4, -2, 7]);
// console.log(result);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
function frequentElement(array) {
  let elCounts = {};
  let maxElCount = 0;
  array.forEach((el) => {
    if (elCounts[el] == null) {
      elCounts[el] = 1;
    } else {
      elCounts[el]++;
    }

    if (elCounts[el] > maxElCount) {
      maxElCount = el;
    }
  });
  return maxElCount;
}
const frequent = frequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]);
// console.log(frequent);

// Task 04: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers. Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
function getIndices(array, target) {
  const finalIndices = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        finalIndices.push(i, j);
        break;
      }
    }
  }
  return finalIndices;
}
const indices = getIndices([1, 3, 6, 8, 11, 15], 12);
// console.log(indices);

// Task 06: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function generatePassword() {
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*-_=:/?";
  let password = "";
  for (let i = 0; i < 10; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}
const generatedPass = generatePassword();
// console.log(generatedPass);

// Task 07:  Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
function romanToInteger(roman) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let integer = 0;
  for (let i = 0; i < roman.length; i++) {
    const currentValue = romans[roman[i]];

    if (i < roman.length - 1 && romans[roman[i + 1]] > currentValue) {
      integer -= currentValue;
    } else {
      integer += currentValue;
    }
  }
  return integer;
}
const integer = romanToInteger("MDV");
// console.log(integer);

// Task 08: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number
function secSmallestNum(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[1];
}
const smallestNum = secSmallestNum([111, 13, 25, 9, 34, 4]);
// console.log(smallestNum);
