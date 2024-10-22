// ===== JavaScript Fundamentals ===== //

// 1. ARRAYS AND OBJECTS
// Arrays are ordered collections of values, indexed from 0
// They can store any type of data: numbers, strings, objects, even other arrays
const arr = [1, 2, 3];

// Common Array Methods (INTERVIEW FAVORITE!)
// push/pop - modify the end of array
arr.push(4);         // Adds 4 to end: [1,2,3,4]. Returns new length
arr.pop();           // Removes & returns last element: [1,2,3]. Returns removed element

// unshift/shift - modify the start of array
arr.unshift(0);      // Adds 0 to start: [0,1,2,3]. Returns new length
arr.shift();         // Removes first element: [1,2,3]. Returns removed element

// slice vs splice (COMMON INTERVIEW QUESTION!)
// slice - non-destructive, creates new array
arr.slice(1, 2);     // Returns elements from index 1 to (2-1): [2]
                     // Original array remains unchanged!

// splice - destructive, modifies original array
arr.splice(1, 1);    // Removes 1 element starting at index 1: [1,3]
                     // Returns array of removed elements

// Objects - key-value pairs, fundamental building blocks in JS
// Properties can be accessed using dot notation (object.property) 
// or bracket notation (object['property'])
const person = {
    name: 'John',
    age: 30,
    // Methods are functions stored as object properties
    sayHello() {
        // 'this' refers to the object itself
        console.log(`Hello, I'm ${this.name}`);
    }
};

// Important Object Methods (INTERVIEW ESSENTIAL!)
Object.keys(person);      // Returns array of property names
Object.values(person);    // Returns array of values
Object.entries(person);   // Returns array of [key, value] pairs

// 2. FUNCTIONS AND RETURNS
// Regular Function Declaration
// Hoisted - can be used before declaration in code
function add(a, b) {
    return a + b;
}

// Arrow Function Expression
// Not hoisted, more concise, lexical 'this' binding
const subtract = (a, b) => a - b;  // Implicit return when one line
// Arrow functions don't have their own 'this' - they inherit from parent scope

// Default Parameters - ES6 feature
const greet = (name = 'Guest') => `Hello ${name}`;
// If no argument passed, 'Guest' is used

// Callback Functions - Functions passed as arguments
// Fundamental for async operations and array methods
function processData(callback) {
    const data = 'Processed';
    callback(data);  // Executes the passed function
}

// 3. ASYNC JAVASCRIPT (VERY COMMON IN INTERVIEWS!)
// Promises - Objects representing eventual completion of async operation
// Has three states: pending, fulfilled, rejected
const myPromise = new Promise((resolve, reject) => {
    // Async operation simulation
    const success = true;
    if (success) {
        resolve('Operation successful');  // Promise fulfilled
    } else {
        reject('Operation failed');       // Promise rejected
    }
});

// Async/Await - Cleaner way to handle promises
// 'async' makes function return a promise
// 'await' pauses execution until promise resolves
async function fetchData() {
    try {
        // await can only be used in async functions
        const response = await fetch('api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        // Error handling is crucial in async operations
        console.error('Error:', error);
    }
}

// 4. ARRAY HIGHER-ORDER FUNCTIONS (EXTREMELY IMPORTANT!)
const numbers = [1, 2, 3, 4, 5];

// forEach - loops through array elements
// Cannot break or return from forEach
numbers.forEach(num => {
    console.log(num);  // Executes function for each element
});

// map - transforms each element, returns new array
// Original array remains unchanged
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

// filter - creates new array with elements passing test
// Returns array with all elements that return true
const evenNumbers = numbers.filter(num => num % 2 === 0);
// [2, 4]

// find - returns FIRST element passing test
// Returns undefined if no element found
const firstEven = numbers.find(num => num % 2 === 0);
// 2

// indexOf - returns first index of element
// Returns -1 if element not found
const index = numbers.indexOf(3);  // 2

// 5. ADVANCED CONCEPTS (CRUCIAL FOR INTERVIEWS!)
// Closure - Function retaining access to parent scope
// Even after parent function has completed
function outer() {
    let count = 0;  // This variable is "enclosed" in the closure
    return function() {
        return ++count;  // Has access to count even after outer() finishes
    };
}
const counter = outer();

// This Binding - One of the most confusing parts of JS
const user = {
    name: 'John',
    // Regular function: 'this' refers to object
    regularFunction: function() {
        console.log(this.name);    // 'John'
    },
    // Arrow function: 'this' refers to surrounding scope
    arrowFunction: () => {
        console.log(this.name);    // undefined
    }
};

// Event Loop (COMMON INTERVIEW QUESTION!)
console.log('1');                              // Executes first (synchronous)
setTimeout(() => console.log('2'), 0);         // Executes last (macro task)
Promise.resolve().then(() => console.log('3')); // Executes third (micro task)
console.log('4');                              // Executes second (synchronous)
// Output: 1, 4, 3, 2

// Modern JS Features
// Destructuring - Extract values from objects/arrays
const { name, age } = person;  // Object destructuring
const [first, second] = numbers;  // Array destructuring

// Spread operator (...) - Expand elements
const newArr = [...numbers];  // Creates shallow copy of array
const newObj = { ...person };  // Creates shallow copy of object

// Template literals - String interpolation
const message = `Hello ${name}, you are ${age} years old`;
// Allows embedded expressions and multiline strings
