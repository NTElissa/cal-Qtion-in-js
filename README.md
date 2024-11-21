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
// Beginner solution
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

// Beginner solution
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

// Beginner solution
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

// Beginner solution
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

// Beginner solution
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

// Beginner solution
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

// Beginner solution
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

// Beginner solution
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

// Beginner solution
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

// Beginner solution
let numbers = [1, 2, 3, 2, 4, 2, 5];
let valueToRemove = 2;
let filteredArray = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] !== valueToRemove) {
    filteredArray.push(numbers[i]); // Add to the new array if it’s not the value to remove.
  }
}

console.log("Modified Array:", filteredArray);


Exercise 11: Multiples of 3 (1 to 30) 🔢
Description: Write a program that prints all multiples of 3 from 1 to 30.
Input: None.
Output: Numbers that are multiples of 3.

javascript
Copy code
// Beginner solution
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i); // Print the number if it is a multiple of 3.
  }
}
Exercise 12: Separate Even and Odd Numbers ➗
Description: Write a program that separates even and odd numbers in an array and prints both groups in separate arrays.
Input: An array of numbers.
Output: Two arrays, one for even numbers and one for odd numbers.

javascript
Copy code
// Beginner solution
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
console.log("Odds:", odds);
Exercise 13: Day of the Week 📅
Description: Write a program that takes a number between 1 and 7 and prints the corresponding day of the week.
Input: A number between 1 and 7.
Output: The name of the day.

javascript
Copy code
// Beginner solution
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
Exercise 14: Find Common Elements 🔗
Description: Write a program that finds all common elements between two arrays called array1 and array2.
Input: Two arrays of numbers.
Output: An array of common elements.

javascript
Copy code
// Beginner solution
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];
let commonElements = [];

for (let i = 0; i < array1.length; i++) {
  if (array2.includes(array1[i])) {
    commonElements.push(array1[i]); // Add to common elements if it's found in both arrays.
  }
}

console.log("Common Elements:", commonElements);
Exercise 15: Count Occurrences in Array 📊
Description: Write a program that counts how many times each element appears in an array called items.
Input: An array of numbers or strings.
Output: A count of each element.

javascript
Copy code
// Beginner solution
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
Exercise 16: Reverse Words in a Sentence 🔄
Description: Write a program that reverses each word in a given string called sentence.
Input: A string.
Output: The sentence with each word reversed.

javascript
Copy code
// Beginner solution
let sentence = "Hello World";
let words = sentence.split(" "); // Split the sentence into words.
let reversedWords = [];

for (let i = 0; i < words.length; i++) {
  let reversedWord = words[i].split("").reverse().join(""); // Reverse each word.
  reversedWords.push(reversedWord);
}

let result = reversedWords.join(" "); // Join the reversed words back into a sentence.
console.log("Reversed Sentence:", result);
Exercise 17: Simple Calculator ➕➖✖️➗
Description: Write a simple calculator program that takes two numbers and an operation (+, -, *, /) and performs the operation.
Input: Two numbers and an operation.
Output: The result of the operation.

javascript
Copy code
// Beginner solution
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
Exercise 18: Find Second Largest Number 🥈
Description: Write a program that finds the second largest number in an array called numbers.
Input: An array of numbers.
Output: The second largest number.

javascript
Copy code
// Beginner solution
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
Exercise 19: Check Palindromic Array 🔁
Description: Write a program that checks if an array reads the same forwards and backwards.
Input: An array of numbers or strings.
Output: "Palindrome" if it is, otherwise "Not a Palindrome".

javascript
Copy code
// Beginner solution
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
🎉 Stay tuned for more exercises! 🚀💻
