//anotations
let a: number;
let userName: string | number;
let authenticated: boolean;
let hello; //this will consider any type

userName = "jarmanjit singh";

//other way to write
let userName2 = <string>"Jarmanjit singh";

//function in ts
const func = (a: number, b: number): string => {
  return String(a * b);
};

////types define or type keyword or Type alias

type userData = string | number;
let userEmail: userData = "jarmanjit Singh";

//similarly type for functions
type funtionalType = (a: string, b: string) => string;

const func2: funtionalType = (a, b) => {
  return a.concat(b);
};

//// Arrays in typescript

let arr: number[] = [846, 68783, 674, 564];
let arr2: string[] = ["dfa", "fdas", "dsaf"];

let arr3: Array<number> = [5465, 5465, 545, 54];
let arr4: Array<string> = ["sdsd", "jdsf", "krdf"];

let arr5: Array<boolean | number> = [55454, true, 5756, false];

//// Tuples - are also same but it will define the fixed number of array and the fixed types

let address: [string, number, string] = ["punjab", 142154, "punjab"];

//// Objects in typescript

type OBJtype = {
  height: number;
  weight: number;
  adult: boolean;
  optionalAddress?: string; //with question mark it will optional otherwise we need all keys to write
};

let obj1: OBJtype = {
  height: 5.9,
  weight: 78,
  adult: true,
  optionalAddress: "amritsar",
};

//// interface - its like a js classes
interface OBJinterf {
  height: number;
  weight: number;
  adult: boolean;
  optionalAddress?: string; //with question mark it will optional otherwise we need all keys to write
}

//differece with type and interface that is interface ke sath hum extend kr skte hai jese class me inhertence kaam krta hai

interface newObj extends OBJinterf {
  gender: string;
}

const obj2: newObj = {
  height: 5.9,
  weight: 80,
  adult: true,
  gender: "male",
};

type FuncTT = (n: number, m: number) => void;
interface newObjWithFunc extends newObj {
  func: FuncTT;
}

const kedal: newObjWithFunc = {
  height: 55,
  weight: 55,
  adult: false,
  gender: "male",
  func: (n, m) => {
    console.log(n * m);
  },
};

kedal.func(2, 4);

////// Functions in typescript

type FuncType = (n: number, m: number, l?: number) => number;

//optional Parameter
const func3: FuncType = (a, b, c) => {
  if (typeof c === "undefined") return a * b; //this is called type guard
  return a * b * c;
};

func3(10, 20);

//default Parameter
const func4: FuncType = (a, b, c = 30) => {
  return a * b * c;
};

func4(10, 20);

//rest operator or uncounted parameters

type FuncType2 = (...m: number[]) => number[];
const func5: FuncType2 = (...m) => {
  return m;
};

func5(12, 54, 54, 979, 65, 32, 65, 54164, 4);

//simple function with type alias
type simpleFuncType = (n: number) => number;

const simpleFunc: simpleFuncType = function lol(n){
    console.log("simple function with type alias", n)
    return n
}
simpleFunc(4)
//OR
function lol(n: string): string{
     console.log(n)
     return n
}
lol("lol func")
