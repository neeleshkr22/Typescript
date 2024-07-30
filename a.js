"use strict";
const x = 22;
console.log(x);
const namee = "Zord";
console.log(namee);
function greeting(yourname) {
    console.log("hello, " + yourname);
}
greeting("Neelesh");
function sum(a, b) {
    return a + b;
}
console.log(sum(22, 10));
function isLegal(a) {
    if (a > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(19));
function isgreated(a, b) {
    if (a > b) {
        console.log(`${a} is greater than ${b}`);
    }
    else {
        console.log(`${b} is greater than ${a}`);
    }
}
isgreated(22, 21);
function runAfter(fn) {
    setTimeout(fn, 1000);
}
runAfter(function () {
    console.log("hello");
});
const user = {
    firstName: "Neelesh",
    lastName: "kumar",
    email: "Neelesh@gmail",
    age: 19
};
function Legal(user) {
    if (user.age > 18) {
        console.log("eligible");
        console.log(`Name is ${user.firstName} and age is ${user.age}`);
    }
    else {
        console.log("not eligible");
        ;
    }
}
Legal(user);
class Employe {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employe("Neelesh", 19);
console.log(e.name);
console.log(e.greet("hello"));
function greet(id) {
    console.log(`${id}`);
}
greet(1);
greet("1");
const team = {
    name: "Neelesh",
    department: "CSE",
    startDate: new Date()
};
console.log(team);
//--------------------------------------------------------Arrays--------------------------------------------------------
function maxnum(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxnum([2, 5, 9, 5, 7, 1, 10]));
function filteredUsers(users) {
    return users.filter(x => x.age >= 18);
}
console.log(filteredUsers([{
        firstName: "Neelesh",
        lastName: "Kumar",
        age: 19
    }, {
        firstName: "Zord",
        lastName: " ",
        age: 19
    },]));
//--------------------------------------------------------Enums--------------------------------------------------------
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed == Direction.Up) {
        console.log("UP");
    }
    else if (keyPressed == Direction.Down) {
        console.log("DOWN");
    }
    else if (keyPressed == Direction.Left) {
        console.log("LEFT");
    }
    else {
        console.log("RIGHT");
    }
}
doSomething(Direction.Left);
doSomething(Direction.Up);
doSomething(Direction.Down);
doSomething(Direction.Right);
