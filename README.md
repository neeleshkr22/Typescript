# Typescript

Welcome to your one-stop TypeScript prep guide! This README contains a comprehensive breakdown of TypeScript concepts from the ground up – great for revision, interviews, or learning from scratch.

---

## 📌 Table of Contents

1. [Introduction to TypeScript](#introduction-to-typescript)
2. [Basic Types](#basic-types)
3. [Functions in TypeScript](#functions-in-typescript)
4. [Interfaces & Type Aliases](#interfaces--type-aliases)
5. [Classes and OOP](#classes-and-oop)
6. [Generics](#generics)
7. [Enums](#enums)
8. [Type Narrowing & Guards](#type-narrowing--guards)
9. [Advanced Types](#advanced-types)
10. [Modules & Namespaces](#modules--namespaces)
11. [Decorators](#decorators)
12. [TypeScript with React (Intro)](#typescript-with-react-intro)
13. [Common Interview Questions](#common-interview-questions)

---

## 🧠 Introduction to TypeScript

- Superset of JavaScript
- Adds static typing
- `.ts` extension
- Compiles to JavaScript

```bash
npm install -g typescript
tsc --init
tsc index.ts
```

---

## 🔤 Basic Types

```ts
let isDone: boolean = false;
let age: number = 25;
let username: string = "Neelesh";
let numbers: number[] = [1, 2, 3];
let tuple: [string, number] = ["Age", 25];
let anything: any = "Could be anything";
```

---

## 🧮 Functions in TypeScript

```ts
function add(a: number, b: number): number {
  return a + b;
}

// Optional & default parameters
function greet(name: string = "Guest"): string {
  return `Hello, ${name}`;
}

// Function types
let calc: (x: number, y: number) => number;
calc = (a, b) => a + b;
```

---

## 🧩 Interfaces & Type Aliases

```ts
interface User {
  name: string;
  age: number;
  isAdmin?: boolean;
}

type ID = string | number;

const user: User = {
  name: "Neelesh",
  age: 22,
};
```

---

## 🏛️ Classes and OOP

```ts
class Person {
  constructor(public name: string, private age: number) {}

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const p = new Person("Neelesh", 22);
```

- `public`, `private`, `protected`, `readonly`
- Inheritance and `super`

---

## 📦 Generics

```ts
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello");

function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
```

---

## 🎮 Enums

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let dir: Direction = Direction.Up;
```

---

## 🕵️ Type Narrowing & Guards

```ts
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  return padding + value;
}
```

---

## 🔥 Advanced Types

```ts
type A = { a: number };
type B = { b: string };
type Union = A | B;
type Intersection = A & B;

type Literal = "start" | "stop";
type Nullable<T> = T | null;
```

### 🛠 Utility Types

```ts
interface Todo {
  title: string;
  description: string;
}

type PartialTodo = Partial<Todo>;
type ReadonlyTodo = Readonly<Todo>;
type PickTitle = Pick<Todo, "title">;
```

---

## 📦 Modules & Namespaces

```ts
// module.ts
export const x = 10;
export function greet() {
  return "Hello!";
}

// main.ts
import { x, greet } from "./module";
```

---

## 🎨 Decorators (Experimental)

```ts
function Log(target: any, key: string) {
  console.log(`Calling method: ${key}`);
}

class Car {
  @Log
  drive() {
    console.log("Driving...");
  }
}
```

Enable in `tsconfig.json`:
```json
{
  "experimentalDecorators": true
}
```

---

## ⚛️ TypeScript with React (Intro)

```tsx
type Props = {
  name: string;
};

const Hello: React.FC<Props> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
```

---

## ❓ Common Interview Questions

A comprehensive guide for preparing TypeScript interview questions — from basics to advanced.

---

## ❓ Common Interview Questions & Answers

### 1. What are the key benefits of TypeScript over JavaScript?
- Static typing helps catch errors during development.
- Better IntelliSense and editor support.
- Improves readability and maintainability of code.
- Supports modern JavaScript features with compatibility.
- Helps in large-scale app development with better tooling.

---

### 2. Explain the difference between `interface` and `type`.

| Feature         | `interface`                          | `type`                                      |
|----------------|--------------------------------------|---------------------------------------------|
| Extension      | Can extend and be extended by others | Can use intersection types (`&`)            |
| Declaration Merging | Supported                        | Not supported                               |
| Use Case       | For object shapes                     | For unions, primitives, tuples, etc.        |

---

### 3. What is type inference?
TypeScript automatically infers the type of a variable when it's declared and initialized.

```ts
let name = "Neelesh"; // inferred as string
```

---

### 4. What are generics and why are they useful?
Generics allow you to write flexible and reusable functions, classes, and interfaces that work with multiple types.

```ts
function identity<T>(value: T): T {
  return value;
}
```

They ensure type safety while maintaining reusability.

---

### 5. How does TypeScript help in large-scale applications?
- Detects bugs early via static typing
- Enforces code consistency
- Enables better refactoring
- Improves documentation with types
- Helps teams work collaboratively with contracts (types/interfaces)

---

### 6. Explain `keyof` and `typeof` in TypeScript.

- `typeof`: Gets the type of a value.
- `keyof`: Gets the keys of a type as a union of string literals.

```ts
const user = { name: "John", age: 30 };
type User = typeof user; // { name: string; age: number }
type UserKeys = keyof User; // "name" | "age"
```

---

### 7. What is the difference between `unknown` and `any`?

- `any`: Opts out of type checking. Can do anything with it.
- `unknown`: Safer alternative to `any`. Requires type-checking before usage.

```ts
let value: unknown = "hello";
value.toUpperCase(); // ❌ Error
if (typeof value === "string") value.toUpperCase(); // ✅ OK
```

---

### 8. What is a type guard in TypeScript?
A way to narrow down the type of a variable within a conditional block.

```ts
function isString(val: unknown): val is string {
  return typeof val === "string";
}
```

---

### 9. What is declaration merging?
When you declare the same `interface` multiple times, TypeScript merges them.

```ts
interface User {
  name: string;
}
interface User {
  age: number;
}
// Final: { name: string; age: number; }
```

---

### 10. What is a discriminated union?
A technique using a common literal field to differentiate between multiple object types.

```ts
type Shape = { kind: "circle"; radius: number } | { kind: "square"; size: number };

function area(shape: Shape) {
  if (shape.kind === "circle") return Math.PI * shape.radius ** 2;
  return shape.size ** 2;
}
```

---

### 11. What does `as const` do in TypeScript?
It marks the object/array as fully immutable and infers literal types.

```ts
const role = ["admin", "user"] as const;
// type: readonly ["admin", "user"]
```

---

### 12. When would you use `never` in TypeScript?
Used when a function **never returns** or a variable can **never be true**.

```ts
function throwError(): never {
  throw new Error("Something went wrong");
}
```

---

### 13. Difference between `readonly` and `const`?

- `const`: Variable cannot be reassigned.
- `readonly`: Property of an object cannot be changed after initialization.

```ts
const obj = { name: "Neelesh" } as const;
// or
interface User { readonly name: string; }
```

---

### 14. How do you type an array of objects?

```ts
type User = { name: string; age: number };
const users: User[] = [{ name: "A", age: 20 }];
```

---

### 15. What is the difference between structural and nominal typing?
TypeScript uses **structural typing** – types are compatible if their structures match, regardless of name.

```ts
type A = { name: string };
type B = { name: string };
const a: A = { name: "John" };
const b: B = a; // ✅ OK in TypeScript
```

---

## 💡 Pro Tips

- Use `strict` mode in `tsconfig.json` to catch most bugs early.
- Use utility types like `Partial<T>`, `Required<T>`, `Readonly<T>`, `Record<K,T>`, etc.
- Prefer `interface` for object shapes and `type` for everything else.
- Always define return types of functions for clarity and safety.

---

🧠 Practice, build, and explore more to stay interview-ready!
---

## ✅ Bonus: Config & Tips

```bash
tsc --init
```

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

---

## 📂 Repo Usage

1. Clone the repo  
   ```bash
   git clone https://github.com/neeleshkr22/Typescript.git
   ```

2. Open `README.md` to explore notes  
3. Run examples using:
   ```bash
   tsc example.ts && node example.js
   ```

---

## ⭐ Star this repo if it helped you!
