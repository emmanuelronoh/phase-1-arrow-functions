// Function to divide two numbers
const divide = (a, b) => {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
};

// Arrow function to square a number
const square = x => x * x;

// Arrow function to add two numbers
const add = (a, b) => a + b;

// Export the functions to be accessible from outside
module.exports = {
    divide,
    square,
    add
};
