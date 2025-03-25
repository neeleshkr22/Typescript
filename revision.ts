const x: number = 2;
console.log(x);

function test(x: number): number {
    return x * 2;
}
console.log(test(2));

function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));


let y = 2;          //implicit
let z : number = 4 //explicit
let w = Infinity; //implicit

let q: boolean;
q = true;

let res = null;    //the value of res now cannot be changed for whole programm time  (empty or non existed)
let ans = undefined; //set to be undefined and can be changed during the program 



///------------------------------arrays--------------------------------
var arr = [1,2,3,4,"hello"];
console.log(arr[4]);

let arr2 : number[] = [1,2,3,4,5];

let nesarr : string[][] = [["hello", "world"], ["hello", "world"]];
console.log(nesarr[0][1]);


//coordinate pair
const coord: number[] = [1,2]
console.log(coord[0]);

const coord1:[number, number] = [22,10]
console.log(coord1[0]);

const coords: [number, number][] = [
    [1,2],
    [-1,3],
    // [-1,[3,5]] when we use [number, number[]][]
]
console.log(coords[0][1]);



//tuple
let tuple: [number, string] = [1, "hello"];
console.log(tuple[1]);

//Literals
let direction:"north" | "east" | "west" | "south";

let responseCode: 200 | 404 | 201;


//Enums
enum Size { 
    small,
    medium,
    large
}
Size.small

var size: Size = 0;

if(size == Size.small){
    console.log("small");
}

enum Color{
    red = 100 ,
    blue,
    grey,
    white
}
Color.blue

var color: Color = Color.blue;

if(color == Color.blue){
    console.log("blue");
}else{
    console.log("not blue");
    
}

enum Direction { 
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

enum Description{
    SmallText = " this is the small text"
}
console.log(Description.SmallText);


//Any Type
//You use any type typically when you are in a very complex situation and you are not able to predict what type of variable  can be

let n:  any = 1;
n.length;

let m: unknown = 1;
if(typeof m == "number"){
    const res = m+1;
}else if(typeof m == "string"){
    const res = m.length;
}

//Type Cast
const res1 = (m as number) +1;
const res2 = (m as  string) + "22";

function processFeedback(input: unknown):void{
    if(typeof input == 'number'){
        console.log(`Processing text: ${input}`);
    }else if(typeof input == 'string'){
        console.log(`Processing String: ${input}`);
    }else{
        console.log("No processing");
    }
}
processFeedback("Great Service")
processFeedback(22);
processFeedback([1,2,3])





//Optional Changing and Bang
const arr1 = [{name: "neelesh"}, {name:"joe"}, {name: "jane"}];
const el = arr1.pop()?.name

const arr4 = [[{name:"zord"}]]
const el1 = arr4.pop()!.pop()!.name
//(!): Operator tells the compiler to ignore the possiblity of undefined
//(?): checking then moving forward



//Functions
//Basic Functions types
function add(x: number,y: number): number{ //expilicit defined 
    return x + y;
}

//recursive call
function factorial(a:number):number{
    if(a == 1){
        console.log(1);
    }
    return a * factorial(a-1);
}

function makeName(firstname: string, lastname: string, middlename?:string){
    if(middlename)return firstname + " " + middlename + " "+ lastname;
    return firstname + " "+ lastname;
}
const fullname = makeName("Neelesh", "Rana")


//calling function inside function
function callFunc(func:(f:string, l: string,m?: string)=>string, param1: string, param2:string){
    func(param1, param2)
}
callFunc(makeName, "Neelesh", "Kumar")

function mul(x:number, y:number):number{
    return x * y
}

function div(x:number,y:number):number{
    return x / y;
}


//calling multiple functions inside  functions
function applyfunc(funcs:((a:number, b:number)=>number)[] ,values:[number,number][] ):number[] {
    const results = [] as number[];
    for(let i = 0;i<funcs.length;i++){
        const args = values[i]
        const result = funcs[i](args[0],args[1])
        results.push(result)
    }
    return results;
}
applyfunc([mul,div],[[1,2],[3,5]])



//Advanced functions types

//res parameter
//call function with many arguments as we want
function sum(...numbers:number[]){
    
}

