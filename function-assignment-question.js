// Q1. Create an arrow function called square that takes a number as an argument and returns its square. Use
// the arrow function to calculate the square of a given number and display the result.

// Arrow function to calculate the square of a number
// const square = (number1,number2) => number1 * number2;

// // Example: Calculate the square of a given number (e.g., 5)
// const givenNumber = 5;
// const result = square(givenNumber);

// // Display the result
// console.log(`The square of ${givenNumber} is: ${result}`);


// Q2. Create a JavaScript function called generateGreeting that takes a name as an argument and returns a
// personalized greeting message. Use this function to greet three different people.
 
// function generateGreeting(name) {
//     return `Hello, ${name}! Welcome to the PW Skills.`;  
// }
// const person1 = "Alice";
// const greeting1 = generateGreeting(person1);
// console.log(greeting1);

// const person2 = "Bob";
// const greeting2 = generateGreeting(person2);
// console.log(greeting2);

// const person3 = "Charlie";
// const greeting3 = generateGreeting(person3);
// console.log(greeting3);

// Q3. Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and
// immediately displays the result.

// (function() {
//     // Define a number
//     const number = 6;
  
//     // Calculate the square using an arrow function inside the IIFE
//     const square = (() => number * number)();
  
//     // Display the result immediately
//     console.log(`The square of ${number} is: ${square}`);
//   })();

// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.

// function calculateTax() {
//     // Define tax rates based on income ranges using closure
//     const taxRates = [
//       { range: 10000, rate: 0.1 },
//       { range: 30000, rate: 0.15 },
//       { range: 70000, rate: 0.2 },
//       { range: Infinity, rate: 0.25 }
//     ];
  
//     // Return a function that calculates tax based on income
//     return function (income) {
//       let tax = 0;
  
//       // Calculate tax based on income ranges
//       for (const { range, rate } of taxRates) {
//         if (income <= range) {
//           tax += income * rate;
//           break;
//         } else {
//           tax += range * rate;
//           income -= range;
//         }
//       }
  
//       return tax;
//     };
//   }
  
//   // Example: Test the function with various incomes
//   const income1 = 15000;
//   const taxCalculator1 = calculateTax();
//   const tax1 = taxCalculator1(income1);
//   console.log(`For an income of $${income1}, the tax to be paid is $${tax1}`);
  
//   const income2 = 50000;
//   const taxCalculator2 = calculateTax();
//   const tax2 = taxCalculator2(income2);
//   console.log(`For an income of $${income2}, the tax to be paid is $${tax2}`);
  
//   const income3 = 90000;
//   const taxCalculator3 = calculateTax();
//   const tax3 = taxCalculator3(income3);
//   console.log(`For an income of $${income3}, the tax to be paid is $${tax3}`);

// Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.
  
// function factorial(n) {
//     // Base case: factorial of 0 is 1
//     if (n === 0) {
//       return 1;
//     } else {
//       // Recursive case: n! = n * (n-1)!
//       return n * factorial(n - 1);
//     }
//   }
  
//   // Example: Test the function with different inputs
//   const input1 = 5;
//   console.log(`Factorial of ${input1} is: ${factorial(input1)}`);
  
//   const input2 = 0;
//   console.log(`Factorial of ${input2} is: ${factorial(input2)}`);
  
//   const input3 = 7;
//   console.log(`Factorial of ${input3} is: ${factorial(input3)}`);

//   Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried
//   version of that function. The curried function should accept arguments one at a time and return a new
//   function until all arguments are provided. Then, it should execute the original function with all arguments.
//   Test the curry function with a function that adds two numbers.

  function curry(fn) {
    // Store the original function's arity (number of expected arguments)
    const arity = fn.length;
  
    // Helper function to curry arguments
    const curried = (...args) =>
      args.length >= arity
        ? fn(...args)  // Execute the original function when all arguments are provided
        : (...moreArgs) => curried(...args, ...moreArgs);  // Return a new curried function
  
    return curried;
  }
  
  // Example: Test the curry function with a function that adds two numbers
  const add = (a, b) => a + b;
  
  const curriedAdd = curry(add);
  
  // Curry the add function to add two numbers one at a time
  const result1 = curriedAdd(3);
  const finalResult1 = result1(5);
  console.log(`Curried addition result: ${finalResult1}`);  // Output: 8
  
  // Or, directly provide both arguments
  const result2 = curriedAdd(2)(4);
  console.log(`Curried addition result: ${result2}`);  // Output: 6
  
  

