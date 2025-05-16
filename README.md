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

1. What are the key benefits of TypeScript over JavaScript?
2. Explain the difference between `interface` and `type`.
3. What is type inference?
4. What are generics and why are they useful?
5. How does TypeScript help in large-scale applications?
6. Explain keyof and typeof operators in TypeScript.
7. What is the difference between unknown and any?

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
