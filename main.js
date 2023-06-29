console.log(
  "JavaScript program - check if a given number is positive, negative, or zero"
);

function checkNumber(number) {
  if (number > 0) {
    console.log("Positive");
  } else if (number < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

// input
checkNumber(5);

console.log(
  "JavaScript program - calculate the sum of two numbers entered by the user"
);

// Prompt the user to enter two numbers
var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));

// Calculate the sum of the two numbers
var sum = num1 + num2;

// Display the result
console.log("The sum of", num1, "and", num2, "is", sum);


console.log("JavaScript function to check if a given number is even or odd")

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is even.");
  } else {
    console.log(number + " is odd.");
  }
}

// Test the function with sample input
checkEvenOdd(10);


console.log("JavaScript program - find the largest number among three numbers entered by the user")

// Prompt the user to enter three numbers
var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));
var num3 = parseInt(prompt("Enter the third number:"));

// Find the largest number
var largestNumber = Math.max(num1, num2, num3);

// Display the result
console.log("The largest number among", num1 + ",", num2 + ",", "and", num3, "is", largestNumber);

console.log("JavaScript program - find the sum of all multiples of 3 or 5 below a given number");

function sumMultiplesOf3And5(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

// Test the function with sample input
var input = 10;
var result = sumMultiplesOf3And5(input);
console.log("The sum of all multiples of 3 or 5 below", input, "is", result);

console.log("JavaScript function - check if a given string is a valid URL.")

function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

// Test the function with sample input
var input = "https://www.example.com";
var isValid = isValidURL(input);
console.log("The given string", input, "is a valid URL:", isValid);


console.log("JavaScript program - find the longest word in a sentence")

function findLongestWord(sentence) {
  // Remove punctuation marks from the sentence
  var cleanSentence = sentence.replace(/[^\w\s]/g, "");

  // Split the sentence into an array of words
  var words = cleanSentence.split(" ");

  // Initialize variables
  var longestWord = "";
  var maxLength = 0;

  // Iterate through each word in the array
  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    // Check if the current word is longer than the previous longest word
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = word;
    }
  }

  return longestWord;
}

// Test the function with sample input
var input = "The quick brown fox jumps over the lazy dog.";
var result = findLongestWord(input);
console.log("The longest word in the sentence is:", result);


console.log("JavaScript function - reverse the order of words in a sentence while maintaining the order of punctuation marks")

function reverseSentence(sentence) {
  // Split the sentence into an array of words
  var words = sentence.split(" ");

  // Reverse the order of the words
  var reversedWords = words.reverse();

  // Join the reversed words back into a sentence
  var reversedSentence = reversedWords.join(" ");

  return reversedSentence;
}

// Test the function with sample input
var input = "Hello, world!";
var result = reverseSentence(input);
console.log("Reversed sentence:", result);

console.log("Write a JavaScript program to find the number of possible combinations given a set of numbers and a target sum")

function findCombinations(numbers, targetSum) {
  // Recursive helper function to find combinations
  function findHelper(index, currentSum) {
    if (currentSum === targetSum) {
      return 1; // Combination found
    }

    if (currentSum > targetSum || index >= numbers.length) {
      return 0; // Combination not possible
    }

    var count = 0;

    // Include current number and recursively find combinations
    count += findHelper(index, currentSum + numbers[index]);

    // Exclude current number and recursively find combinations
    count += findHelper(index + 1, currentSum);

    return count;
  }

  // Start the recursive search from index 0 with current sum 0
  return findHelper(0, 0);
}

// Test the function with sample input
var numbers = [2, 4, 6, 8];
var targetSum = 10;
var result = findCombinations(numbers, targetSum);
console.log("Number of possible combinations:", result);


console.log(" Write a JavaScript program to implement a queue data structure using an array")
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty.";
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  print() {
    console.log(this.queue);
  }
}

// Test the Queue implementation
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();

queue.print();
