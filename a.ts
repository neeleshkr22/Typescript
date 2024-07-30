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


function isLegal(a:number): boolean{
    if(a>18){
        return true;
    }else{
        return false;
    }
}
console.log(isLegal(19));


function isgreated(a:number, b:number){
    if(a>b){
        console.log(`${a} is greater than ${b}`);
    }else{
        console.log(`${b} is greater than ${a}`);
    }
}
isgreated(22,21)


function runAfter(fn:()=> void){
    setTimeout(fn,1000)
}  
runAfter(function(){
    console.log("hello");
})


//--------------------------------------------------------Interfaces--------------------------------------------------------
interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

const user: User={
    firstName:"Neelesh",
    lastName : "kumar",
    email : "Neelesh@gmail",
    age: 19
}

function Legal(user: User) {
    if (user.age > 18) {
        console.log("eligible");
        console.log(`Name is ${user.firstName} and age is ${user.age}`);
    } else {
        console.log("not eligible");
        ;
    }
}
Legal(user);



//implementing interfaces
interface Person{
    name: string,
    age: number,
    greet(phrase : string):void;
}

class Employe implements Person{
    name: string;
    age: number;

    constructor(n: string, a:number) {
        this.name = n;
        this.age = a;
    }
    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`)
    }
}

const e = new Employe("Neelesh", 19);
console.log(e.name);
console.log(e.greet("hello"));


//--------------------------------------------------------types--------------------------------------------------------
type User1 = {
    firstName : string,
    lastName : string,
    age: number
}
//union in type
type id = string | number;

function greet(id : id){
    console.log(`${id}`);
}
greet(1);
greet("1");

//intersection
type Employee = {
    name:string,
    startDate : Date
}
type Manager = {
    name: string,
    department : string
}
type Team = Employee & Manager;
const team : Team={
    name: "Neelesh",
    department: "CSE",
    startDate : new Date()
}
console.log(team);


//--------------------------------------------------------Arrays--------------------------------------------------------
function maxnum(arr: number[]){
    let max = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
console.log(maxnum([2,5,9,5,7,1,10]));


interface User3 {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User3[]) {
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
}, ]));



//--------------------------------------------------------Enums--------------------------------------------------------
enum Direction{
    Up, 
    Down,
    Left,
    Right
}

function doSomething(keyPressed:Direction){
    if(keyPressed == Direction.Up){
        console.log("UP");
    }else if(keyPressed == Direction.Down){
        console.log("DOWN");
    }else if(keyPressed == Direction.Left){
        console.log("LEFT");
    }else{
        console.log("RIGHT")
    }
}
doSomething(Direction.Left)
doSomething(Direction.Up)
doSomething(Direction.Down)
doSomething(Direction.Right)
console.log(Direction.Down); //will give a number



//--------------------------------------------------------Generics--------------------------------------------------------
function identity<T>(arg:T):T{
    return arg;
}

let Output = identity<string>("Zord");
let Output2 = identity<number>(22);  
