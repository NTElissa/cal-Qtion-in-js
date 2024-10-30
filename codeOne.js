// 1. Check if a number is Odd or Even
function checkOddEven(number) {
    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

// 2. Sum of all elements in an array
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}

// 3. Find the smallest number in an array
function findSmallest(values) {
    let smallest = values[0];
    for (let i = 1; i < values.length; i++) {
        if (values[i] < smallest) {
            smallest = values[i];
        }
    }
    console.log(smallest);
}

// 4. Count the number of vowels in a string
function countVowels(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    console.log(count);
}

// 5. Grade feedback
function gradeFeedback(grade) {
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
        console.log("Invalid grade");
    }
}

// 6. Print all prime numbers from 1 to 50
function printPrimes() {
    for (let num = 2; num <= 50; num++) {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num);
        }
    }
}

// 7. Check if a value exists in an array
function findInArray(arr, value) {
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            found = true;
            break;
        }
    }
    if (found) {
        console.log("Found");
    } else {
        console.log("Not Found");
    }
}

// 8. Count positive, negative, and zero numbers
function countNumbers(numbers) {
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
    console.log("Positives:", positives, "Negatives:", negatives, "Zeros:", zeros);
}

// 9. Calculate the average of numbers in an array
function averageArray(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    let average = sum / scores.length;
    console.log(average);
}

// 10. Remove a specific value from an array
function removeValue(numbers, valueToRemove) {
    let newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== valueToRemove) {
            newArray.push(numbers[i]);
        }
    }
    console.log(newArray);
}

// 11. Print multiples of 3 from 1 to 30
function printMultiplesOfThree() {
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

// 12. Separate even and odd numbers into two arrays
function separateEvenOdd(numbers) {
    let evens = [];
    let odds = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evens.push(numbers[i]);
        } else {
            odds.push(numbers[i]);
        }
    }
    console.log("Evens:", evens);
    console.log("Odds:", odds);
}

// 13. Day of the week based on number
function dayOfWeek(number) {
    if (number === 1) console.log("Sunday");
    else if (number === 2) console.log("Monday");
    else if (number === 3) console.log("Tuesday");
    else if (number === 4) console.log("Wednesday");
    else if (number === 5) console.log("Thursday");
    else if (number === 6) console.log("Friday");
    else if (number === 7) console.log("Saturday");
    else console.log("Invalid number");
}

// 14. Find common elements in two arrays
function findCommonElements(array1, array2) {
    let common = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            common.push(array1[i]);
        }
    }
    console.log(common);
}

// 15. Count occurrences of each element in an array
function countOccurrences(items) {
    let counts = {};
    for (let i = 0; i < items.length; i++) {
        if (counts[items[i]] === undefined) {
            counts[items[i]] = 1;
        } else {
            counts[items[i]]++;
        }
    }
    console.log(counts);
}

// 16. Reverse each word in a sentence
function reverseWords(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    console.log(words.join(" "));
}

// 17. Simple calculator
function calculator(num1, num2, operation) {
    if (operation === "+") {
        console.log(num1 + num2);
    } else if (operation === "-") {
        console.log(num1 - num2);
    } else if (operation === "*") {
        console.log(num1 * num2);
    } else if (operation === "/") {
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log("Cannot divide by zero");
        }
    } else {
        console.log("Invalid operation");
    }
}

// 18. Find the second largest number in an array
function secondLargest(numbers) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            secondLargest = largest;
            largest = numbers[i];
        } else if (numbers[i] > secondLargest && numbers[i] < largest) {
            secondLargest = numbers[i];
        }
    }
    console.log(secondLargest);
}



// 18. Find the second largest number in an array
function secondLargest(numbers) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            secondLargest = largest;
            largest = numbers[i];
        } else if (numbers[i] > secondLargest && numbers[i] < largest) {
            secondLargest = numbers[i];
        }
    }
    if (secondLargest === -Infinity) {
        console.log("No second largest number");
    } else {
        console.log(secondLargest);
    }
}

// 19. Check if an array is palindromic
function isPalindromeArray(array) {
    let isPalindrome = true;
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        if (array[i] !== array[array.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) {
        console.log("Palindrome");
    } else {
        console.log("Not a Palindrome");
    }
}

// 20. Print a pattern using a for loop
function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}

// 21. Find the largest odd number in an array
function largestOdd(numbers) {
    let largestOdd = null;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            if (largestOdd === null || numbers[i] > largestOdd) {
                largestOdd = numbers[i];
            }
        }
    }
    if (largestOdd === null) {
        console.log("No odd numbers");
    } else {
        console.log(largestOdd);
    }
}

// 22. Calculate the sum of digits of a positive integer
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10; // Get the last digit
        number = Math.floor(number / 10); // Remove the last digit
    }
    console.log(sum);
}

// 23. Remove duplicate elements from an array
function removeDuplicates(values) {
    let uniqueValues = [];
    for (let i = 0; i < values.length; i++) {
        if (!uniqueValues.includes(values[i])) {
            uniqueValues.push(values[i]);
        }
    }
    console.log(uniqueValues);
}

// 24. Count the number of words in a sentence
function countWords(sentence) {
    let words = sentence.trim().split(/\s+/);
    console.log(words.length);
}

// 25. Print the multiplication table of a given number
function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(number + " * " + i + " = " + (number * i));
    }
}
