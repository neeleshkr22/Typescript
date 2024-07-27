const x: number = 22;
console.log(x);

const namee: string = "Zord";
console.log(namee);


function greeting(yourname: string){
    console.log("hello, "+ yourname);
}

greeting("Neelesh")

function sum(a:number , b:number):number{
    return a + b;
}
console.log(sum(22,10));

// //number (Primitive Type)
// Definition: number is a primitive data type in TypeScript that represents numerical values, both integer and floating-point.
// Usage: It is the type you should use for most numerical calculations.
// Characteristics:
// Primitive types are immutable.
// They are not objects and do not have methods.
// They are more performant than their object counterparts.
// They are stored directly in the stack, leading to faster access times.
// Example:

// typescript
// Copy code
// let num: number = 42;
// console.log(num); // Output: 42

// // Arithmetic operations
// let sum: number = num + 8;
// console.log(sum); // Output: 50
// Number (Wrapper Object)
// Definition: Number is an object type that wraps around the primitive number type.
// Usage: It is generally used when you need to perform operations that require a number to be treated as an object.
// Characteristics:
// Objects are mutable and can have methods.
// Number objects can have properties and methods.
// They are less performant compared to their primitive counterparts because they are stored in the heap.
// Example:

// typescript
// Copy code
// let numObj: Number = new Number(42);
// console.log(numObj); // Output: [Number: 42]

// // Accessing methods
// console.log(numObj.toFixed(2)); // Output: "42.00"
// Key Differences
// Type:

// number is a primitive type.
// Number is an object (or wrapper) type.
// Performance:

// number is more performant because it is a primitive and is stored directly in the stack.
// Number is less performant because it is an object and is stored in the heap.
// Usage:

// Use number for numerical calculations and whenever possible.
// Use Number only when you need to work with methods and properties of the number object.
// Syntax:

// number values are created directly.
// Number values are created using the new keyword.
// Example Demonstrating Differences:

// typescript
// Copy code
// // Using number (primitive)
// let a: number = 10;
// let b: number = 20;
// let sum: number = a + b;
// console.log(sum); // Output: 30

// // Using Number (object)
// let x: Number = new Number(10);
// let y: Number = new Number(20);
// let sumObj: Number = new Number(x.valueOf() + y.valueOf());
// console.log(sumObj); // Output: [Number: 30]

// // Incorrect usage that leads to errors
// function sumIncorrect(a: Number, b: Number): Number {
//     // This would cause an error because 'a' and 'b' are objects, not primitives
//     return a + b; // Error: operator + cannot be applied to types 'Number' and 'Number'
// }
// When to Use Each
// Use number when you are dealing with numerical data and performing arithmetic operations.
// Use Number if you specifically need to create a number object to access properties and methods defined on Number.prototype.
// By understanding these differences, you can make informed decisions on when to use number and when to use Number in your TypeScript code.


function isLegal(a:number): boolean{
    if(a>18){
        return true;
    }else{
        return false;
    }
}
console.log(isLegal(19));
