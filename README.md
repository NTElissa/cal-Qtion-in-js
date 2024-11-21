# 🌟 JavaScript Level 3 Exercises

This repository contains a set of **JavaScript exercises** designed to enhance your skills through hands-on coding problems. Each exercise targets a fundamental concept, ranging from basic control structures to more advanced array manipulations and algorithm-based challenges.

## 📜 Table of Contents

1. [Odd or Even Checker](#exercise-1-odd-or-even-checker)
2. [Sum of Array Elements](#exercise-2-sum-of-array-elements)
3. [Smallest Number in Array](#exercise-3-smallest-number-in-array)
4. [Vowel Counter in String](#exercise-4-vowel-counter-in-string)
5. [Letter Grade Feedback](#exercise-5-letter-grade-feedback)
6. [Prime Numbers (1 to 50)](#exercise-6-prime-numbers-1-to-50)
7. [Value Finder in Array](#exercise-7-value-finder-in-array)
8. [Count Positives, Negatives, Zeros](#exercise-8-count-positives-negatives-zeros)
9. [Average of Array Elements](#exercise-9-average-of-array-elements)
10. [Remove Specific Value from Array](#exercise-10-remove-specific-value-from-array)
11. [Multiples of 3 (1 to 30)](#exercise-11-multiples-of-3-1-to-30)
12. [Separate Even and Odd Numbers](#exercise-12-separate-even-and-odd-numbers)
13. [Day of the Week](#exercise-13-day-of-the-week)
14. [Find Common Elements](#exercise-14-find-common-elements)
15. [Count Occurrences in Array](#exercise-15-count-occurrences-in-array)
16. [Reverse Words in a Sentence](#exercise-16-reverse-words-in-a-sentence)
17. [Simple Calculator](#exercise-17-simple-calculator)
18. [Find Second Largest Number](#exercise-18-find-second-largest-number)
19. [Check Palindromic Array](#exercise-19-check-palindromic-array)
20. [Pattern Printing](#exercise-20-pattern-printing)
21. [Find Largest Odd Number](#exercise-21-find-largest-odd-number)
22. [Sum of Digits](#exercise-22-sum-of-digits)
23. [Remove Duplicates from Array](#exercise-23-remove-duplicates-from-array)
24. [Word Count in Sentence](#exercise-24-word-count-in-sentence)
25. [Multiplication Table](#exercise-25-multiplication-table)

---

## Exercise 1: Odd or Even Checker ⚖️

**Description**: Write a program that checks if a number is odd or even.  
**Input**: A number.  
**Output**: "Odd" if the number is odd, and "Even" if the number is even.

```javascript
let number = 7;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
``` 
Exercise 2: Sum of Array Elements ➕
Description: Write a program that calculates the sum of all elements in an array called numbers.
Input: An array of numbers.
Output: The total sum.

```javascript

let numbers = [10, 20, 30, 40];
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum);
```
Exercise 3: Smallest Number in Array 🔎
Description: Write a program that finds and prints the smallest number in an array called values.
Input: An array of numbers.
Output: The smallest number.

``` javascript
let values = [5, 2, 9, 1, 6];
let smallest = Math.min(...values);
console.log("Smallest Number:", smallest);
```
Exercise 4: Vowel Counter in String 🅰️
Description: Write a program that counts the number of vowels in a given string called sentence.
Input: A string.
Output: The total number of vowels.

```javascript

let sentence = "Hello World";
let vowels = sentence.match(/[aeiou]/gi) || [];
console.log("Vowel Count:", vowels.length);
```
Exercise 5: Letter Grade Feedback 🎓
Description: Write a program that takes a letter grade (like "A", "B", "C", etc.) and prints feedback.
Input: A grade.
Output: Feedback as follows:

"A" → "Excellent"
"B" → "Good"
"C" → "Average"
"D" → "Below Average"
"F" → "Fail"

``` javascript

let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log



```



---

## 📜 Table of Contents

1. [Odd or Even Checker](#exercise-1-odd-or-even-checker)
2. [Sum of Array Elements](#exercise-2-sum-of-array-elements)
3. [Smallest Number in Array](#exercise-3-smallest-number-in-array)
4. [Vowel Counter in String](#exercise-4-vowel-counter-in-string)
5. [Letter Grade Feedback](#exercise-5-letter-grade-feedback)
6. [Prime Numbers (1 to 50)](#exercise-6-prime-numbers-1-to-50)
7. [Value Finder in Array](#exercise-7-value-finder-in-array)
8. [Count Positives, Negatives, Zeros](#exercise-8-count-positives-negatives-zeros)
9. [Average of Array Elements](#exercise-9-average-of-array-elements)
10. [Remove Specific Value from Array](#exercise-10-remove-specific-value-from-array)

---

## Exercise 1: Odd or Even Checker ⚖️

**Description**: Write a program that checks if a number is odd or even.  
**Input**: A number.  
**Output**: "Odd" if the number is odd, and "Even" if the number is even.

```javascript

let number = 7;

if (number % 2 === 0) {
  console.log("Even"); // If the number is divisible by 2, it's even.
} else {
  console.log("Odd"); // Otherwise, it's odd.
}
```
Exercise 2: Sum of Array Elements ➕
Description: Write a program that calculates the sum of all elements in an array called numbers.
Input: An array of numbers.
Output: The total sum.

``` javascript

let numbers = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; // Add each number in the array to the sum.
}

console.log("Sum:", sum); // Print the total sum.
```
Exercise 3: Smallest Number in Array 🔎
Description: Write a program that finds and prints the smallest number in an array called values.
Input: An array of numbers.
Output: The smallest number.

```javascript


let values = [5, 2, 9, 1, 6];
let smallest = values[0]; // Assume the first number is the smallest.

for (let i = 1; i < values.length; i++) {
  if (values[i] < smallest) {
    smallest = values[i]; // Update if a smaller number is found.
  }
}

console.log("Smallest Number:", smallest);
```
Exercise 4: Vowel Counter in String 🅰️
Description: Write a program that counts the number of vowels in a given string called sentence.
Input: A string.
Output: The total number of vowels.

```javascript

let sentence = "Hello World";
let count = 0;
let vowels = "aeiouAEIOU"; // List of vowels.

for (let i = 0; i < sentence.length; i++) {
  if (vowels.includes(sentence[i])) {
    count++; // Increment count if the character is a vowel.
  }
}

console.log("Vowel Count:", count);
```
Exercise 5: Letter Grade Feedback 🎓
Description: Write a program that takes a letter grade (like "A", "B", "C", etc.) and prints feedback.
Input: A grade.
Output: Feedback as follows:

"A" → "Excellent"
"B" → "Good"
"C" → "Average"
"D" → "Below Average"
"F" → "Fail"
```javascript


let grade = "B";

if (grade === "A") {
  console.log("Excellent");
} else if (grade === "B") {
  console.log("Good");
} else if (grade === "C") {
  console.log("Average");
} else if (grade === "D") {
  console.log("Below Average");
} else if (grade === "F") {
  console.log("Fail");
} else {
  console.log("Invalid Grade"); // Handle unexpected input.
}
```
Exercise 6: Prime Numbers (1 to 50) 🧮
Description: Write a program that prints all prime numbers between 1 and 50.
Input: None.
Output: A list of prime numbers.

```javascript

for (let num = 2; num <= 50; num++) {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false; // Mark as not prime if divisible by another number.
      break;
    }
  }

  if (isPrime) {
    console.log(num); // Print the prime number.
  }
}
```
Exercise 7: Value Finder in Array 🔍
Description: Write a program that checks if a specific value exists in an array.
Input: An array and a value to search.
Output: "Found" if the value exists, otherwise "Not Found".

```javascript

let arr = [1, 2, 3, 4, 5];
let value = 3;
let found = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === value) {
    found = true; // Set found to true if the value is in the array.
    break;
  }
}

if (found) {
  console.log("Found");
} else {
  console.log("Not Found");
}
```
Exercise 8: Count Positives, Negatives, Zeros ➕➖0️⃣
Description: Write a program that counts how many numbers in an array are positive, negative, or zero.
Input: An array of numbers.
Output: Counts for each category.

```javascript

let numbers = [1, -2, 0, 3, -4, 5, 0];
let positives = 0;
let negatives = 0;
let zeros = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positives++;
  } else if (numbers[i] < 0) {
    negatives++;
  } else {
    zeros++;
  }
}

console.log("Positives:", positives);
console.log("Negatives:", negatives);
console.log("Zeros:", zeros);
```
Exercise 9: Average of Array Elements 📊
Description: Write a program that computes the average of all numbers in an array called scores.
Input: An array of numbers.
Output: The average.

```javascript

let scores = [90, 80, 70, 100];
let total = 0;

for (let i = 0; i < scores.length; i++) {
  total += scores[i]; // Add each score to the total.
}

let average = total / scores.length; // Divide total by the number of scores.
console.log("Average:", average);
```
Exercise 10: Remove Specific Value from Array 🗑️
Description: Write a program to remove all occurrences of a specific value from an array called numbers.
Input: An array and a value to remove.
Output: The modified array.

```javascript

let numbers = [1, 2, 3, 2, 4, 2, 5];
let valueToRemove = 2;
let filteredArray = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] !== valueToRemove) {
    filteredArray.push(numbers[i]); // Add to the new array if it’s not the value to remove.
  }
}

console.log("Modified Array:", filteredArray);

```
Exercise 11: Multiples of 3 (1 to 30) 🔢
Description: Write a program that prints all multiples of 3 from 1 to 30.
Input: None.
Output: Numbers that are multiples of 3.

``` javascript

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i); // Print the number if it is a multiple of 3.
  }
}
```
Exercise 12: Separate Even and Odd Numbers ➗
Description: Write a program that separates even and odd numbers in an array and prints both groups in separate arrays.
Input: An array of numbers.
Output: Two arrays, one for even numbers and one for odd numbers.

```javascript

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evens = [];
let odds = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i]); // Add even numbers to the evens array.
  } else {
    odds.push(numbers[i]); // Add odd numbers to the odds array.
  }
}

console.log("Evens:", evens);
console.log("Odds:", odds)
```
Exercise 13: Day of the Week 📅
Description: Write a program that takes a number between 1 and 7 and prints the corresponding day of the week.
Input: A number between 1 and 7.
Output: The name of the day.

```javascript

let dayNumber = 4; // Example input
let day;

switch (dayNumber) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 7:
    day = "Sunday";
    break;
  default:
    day = "Invalid day number";
}

console.log("Day:", day);
```
Exercise 14: Find Common Elements 🔗
Description: Write a program that finds all common elements between two arrays called array1 and array2.
Input: Two arrays of numbers.
Output: An array of common elements.

```javascript


let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];
let commonElements = [];

for (let i = 0; i < array1.length; i++) {
  if (array2.includes(array1[i])) {
    commonElements.push(array1[i]); // Add to common elements if it's found in both arrays.
  }
}

console.log("Common Elements:", commonElements);
```
Exercise 15: Count Occurrences in Array 📊
Description: Write a program that counts how many times each element appears in an array called items.
Input: An array of numbers or strings.
Output: A count of each element.

```javascript


let items = ["apple", "banana", "apple", "orange", "banana", "apple"];
let counts = {};

for (let i = 0; i < items.length; i++) {
  let item = items[i];
  if (counts[item]) {
    counts[item]++; // Increment count if the item already exists in the counts object.
  } else {
    counts[item] = 1; // Initialize count to 1 if it's the first occurrence.
  }
}

console.log("Counts:", counts);
```
Exercise 16: Reverse Words in a Sentence 🔄
Description: Write a program that reverses each word in a given string called sentence.
Input: A string.
Output: The sentence with each word reversed.

```javascript

let sentence = "Hello World";
let words = sentence.split(" "); // Split the sentence into words.
let reversedWords = [];

for (let i = 0; i < words.length; i++) {
  let reversedWord = words[i].split("").reverse().join(""); // Reverse each word.
  reversedWords.push(reversedWord);
}

let result = reversedWords.join(" "); // Join the reversed words back into a sentence.
console.log("Reversed Sentence:", result);
```
Exercise 17: Simple Calculator ➕➖✖️➗
Description: Write a simple calculator program that takes two numbers and an operation (+, -, *, /) and performs the operation.
Input: Two numbers and an operation.
Output: The result of the operation.

```javascript


let num1 = 10;
let num2 = 5;
let operation = "+"; // Choose from "+", "-", "*", or "/".
let result;

if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  result = num1 / num2;
} else {
  result = "Invalid operation";
}

console.log("Result:", result);
```
Exercise 18: Find Second Largest Number 🥈
Description: Write a program that finds the second largest number in an array called numbers.
Input: An array of numbers.
Output: The second largest number.

```javascript


let numbers = [10, 20, 5, 8, 30];
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    secondLargest = largest; // Update second largest before updating largest.
    largest = numbers[i];
  } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
    secondLargest = numbers[i]; // Update second largest if it's not equal to largest.
  }
}

console.log("Second Largest Number:", secondLargest);
```
Exercise 19: Check Palindromic Array 🔁
Description: Write a program that checks if an array reads the same forwards and backwards.
Input: An array of numbers or strings.
Output: "Palindrome" if it is, otherwise "Not a Palindrome".

``` javascript

let array = [1, 2, 3, 2, 1];
let isPalindrome = true;

for (let i = 0; i < array.length / 2; i++) {
  if (array[i] !== array[array.length - 1 - i]) {
    isPalindrome = false; // If any element doesn't match its counterpart, it's not a palindrome.
    break;
  }
}

if (isPalindrome) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome");
}

```
Exercise 20: Pattern Printing 🖼️
Description: Write a program that uses a loop to print a pattern of stars (*) for a given n.
Input: A number n.
Output: A pattern of *.

```javascript


let n = 5; // Number of rows
for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i)); // Repeat the "*" i times for each row
}
```
Exercise 21: Find Largest Odd Number 🔍
Description: Write a program that finds the largest odd number in an array called numbers.
Input: An array of numbers.
Output: The largest odd number. If no odd numbers are found, print "No odd numbers."

```javascript


let numbers = [2, 8, 6, 7, 11, 14];
let largestOdd = null;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0 && (largestOdd === null || numbers[i] > largestOdd)) {
    largestOdd = numbers[i]; // Update the largest odd number
  }
}

if (largestOdd !== null) {
  console.log("Largest Odd Number:", largestOdd);
} else {
  console.log("No odd numbers");
}
```
Exercise 22: Sum of Digits ➕🔢
Description: Write a program that calculates the sum of the digits of a positive integer.
Input: A positive integer.
Output: The sum of its digits.

```javascript


let number = 12345; // Example input
let sum = 0;

while (number > 0) {
  sum += number % 10; // Add the last digit to the sum
  number = Math.floor(number / 10); // Remove the last digit
}

console.log("Sum of Digits:", sum);
```
Exercise 23: Remove Duplicates from Array 🚫🔁
Description: Write a program that removes duplicate elements from an array called values and prints the resulting array with unique values only.
Input: An array of numbers or strings.
Output: An array with duplicates removed.

```javascript

let values = [1, 2, 2, 3, 4, 4, 5];
let uniqueValues = [];

for (let i = 0; i < values.length; i++) {
  if (!uniqueValues.includes(values[i])) {
    uniqueValues.push(values[i]); // Add to uniqueValues if it's not already included
  }
}

console.log("Unique Values:", uniqueValues);
```
Exercise 24: Word Count in Sentence ✍️
Description: Write a program that counts the number of words in a given sentence.
Input: A sentence as a string.
Output: The total word count.

```javascript


let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(" "); // Split the sentence into words
console.log("Word Count:", words.length);
```
Exercise 25: Multiplication Table 📊
Description: Write a program that prints the multiplication table of a given number up to 10.
Input: A number.
Output: Its multiplication table.

``` javascript

let number = 5; // Example input

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
```
Exercise 26: Fibonacci Sequence 🔢➕🔢
Description: Write a program that prints the Fibonacci sequence up to a given number n.
Input: A number n.
Output: The Fibonacci sequence up to n terms.

```javascript

let n = 10; // Example: Print 10 terms
let a = 0, b = 1;

console.log(a); // Print the first term
if (n > 1) console.log(b); // Print the second term

for (let i = 3; i <= n; i++) {
  let next = a + b;
  console.log(next); // Print the next term
  a = b;
  b = next;
}
```
Exercise 27: Count Consonants in String 🔤
Description: Write a program that counts the number of consonants in a given string.
Input: A string.
Output: The total consonant count.

```javascript

let sentence = "Hello World";
let consonants = sentence.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []; // Match all consonants
console.log("Consonant Count:", consonants.length);
````
Exercise 28: Merge and Sort Arrays 🔗📈
Description: Write a program that merges two arrays and sorts the resulting array in ascending order.
Input: Two arrays of numbers.
Output: A single sorted array.

```javascript


let array1 = [3, 1, 4];
let array2 = [6, 2, 5];
let mergedArray = array1.concat(array2).sort((a, b) => a - b); // Merge and sort

console.log("Merged and Sorted Array:", mergedArray);
```
Exercise 29: Factorial Calculator ✖️
Description: Write a program that calculates the factorial of a given number n.
Input: A number n.
Output: The factorial of n.

```javascript


let n = 5; // Example input
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i; // Multiply factorial by the current number
}

console.log("Factorial:", factorial);
```
Exercise 30: Check for Anagram 🔄
Description: Write a program that checks if two strings are anagrams of each other.
Input: Two strings.
Output: "Anagram" if they are anagrams, otherwise "Not an Anagram."

```javascript

let str1 = "listen";
let str2 = "silent";

let sortedStr1 = str1.split("").sort().join(""); // Sort the characters
let sortedStr2 = str2.split("").sort().join("");

if (sortedStr1 === sortedStr2) {
  console.log("Anagram");
} else {
  console.log("Not an Anagram");
}
```

Exercise 31: Replace Vowels in String ✏️
Description: Write a program that replaces all vowels in a string with a specific character (e.g., *).
Input: A string and a replacement character.
Output: The modified string.

```javascript


let sentence = "Hello World";
let replacement = "*";
let modifiedSentence = sentence.replace(/[aeiou]/gi, replacement); // Replace vowels with '*'

console.log("Modified String:", modifiedSentence);
```
Exercise 32: Sort Array of Strings by Length 📏
Description: Write a program that sorts an array of strings by their length in ascending order.
Input: An array of strings.
Output: The sorted array.

```javascript

let strings = ["apple", "kiwi", "banana", "cherry"];
strings.sort((a, b) => a.length - b.length); // Sort by length

console.log("Sorted Strings:", strings);
```
Exercise 33: Generate Random Numbers 🎲
Description: Write a program that generates n random numbers within a specified range (min to max).
Input: The range and the number of random numbers to generate.
Output: An array of random numbers.

```javascript

let n = 5; // Number of random numbers
let min = 10;
let max = 50;
let randomNumbers = [];

for (let i = 0; i < n; i++) {
  randomNumbers.push(Math.floor(Math.random() * (max - min + 1)) + min); // Generate random numbers
}

console.log("Random Numbers:", randomNumbers);
````
Exercise 34: Find Longest Word in Sentence 📜
Description: Write a program that finds the longest word in a given sentence.
Input: A sentence.
Output: The longest word.

```javascript

let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(" ");
let longestWord = "";

for (let word of words) {
  if (word.length > longestWord.length) {
    longestWord = word; // Update the longest word
  }
}

console.log("Longest Word:", longestWord);
````
Exercise 35: Sum of Multiples ➕✖️
Description: Write a program that calculates the sum of all multiples of a given number n up to a limit m.
Input: Two numbers n and m.
Output: The sum of multiples.

```javascript

let n = 3; // Multiple
let m = 10; // Limit
let sum = 0;

for (let i = n; i <= m; i += n) {
  sum += i; // Add multiples of n
}

console.log("Sum of Multiples:", sum);
```
Exercise 36: Swap Two Variables 🔄
Description: Write a program that swaps the values of two variables without using a third variable.
Input: Two numbers.
Output: The swapped values.

```javascript

let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log("Swapped Values:", "a =", a, ", b =", b);
```
Exercise 37: Check for Substring 🔍
Description: Write a program that checks if a given substring exists in a string.
Input: A string and a substring.
Output: "Found" if the substring exists, otherwise "Not Found."

```javascript

let string = "Hello, welcome to JavaScript programming!";
let substring = "JavaScript";

if (string.includes(substring)) {
  console.log("Found");
} else {
  console.log("Not Found");
}
```
Exercise 38: Convert Celsius to Fahrenheit 🌡️
Description: Write a program that converts a temperature from Celsius to Fahrenheit.
Input: Temperature in Celsius.
Output: Temperature in Fahrenheit.

``` javascript

let celsius = 25; // Example input
let fahrenheit = (celsius * 9) / 5 + 32; // Conversion formula

console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
```
Exercise 39: Remove All Non-Alphanumeric Characters 🚫
Description: Write a program that removes all non-alphanumeric characters from a string.
Input: A string.
Output: A cleaned string with only alphanumeric characters.

```javascript

let sentence = "Hello, World! Welcome to 2024.";
let cleaned = sentence.replace(/[^a-z0-9]/gi, ""); // Remove non-alphanumeric characters

console.log("Cleaned String:", cleaned);
```
Exercise 40: Power Calculator 🔋
Description: Write a program that calculates the power of a number base raised to the exponent.
Input: A base and an exponent.
Output: The result.

``` javascript

let base = 2;
let exponent = 3;
let result = 1;

for (let i = 0; i < exponent; i++) {
  result *= base; // Multiply base exponent times
}

console.log(`${base}^${exponent} = ${result}`);
```
🎉  🏁
