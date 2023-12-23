//anotations
let a: number;
let userName: string | number;
let authenticated: boolean;
let hello; //this will consider any type

userName = "jarmanjit singh";

//type alias
type themeMode = "light" | "dark";
const mode: themeMode = "dark";

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

const simpleFunc: simpleFuncType = function lol(n) {
  console.log("simple function with type alias", n);
  return n;
};
simpleFunc(4);
//OR
function lol(n: string): string {
  console.log(n);
  return n;
}
lol("lol func");

//////////////// Function with objects

//with type
type getDataTypes = (products: {
  name: string;
  stock: number;
  price: number;
  photo: string;
}) => void;

const getdata: getDataTypes = (products) => {
  console.log(products);
};

const productOne = {
  name: "Macbook",
  stock: 40,
  price: 300000,
  photo: "https://image.png",
};

//but if here productOne ko bhi hum type se define krna chahe to ta ki isme bhi koi property miss na ho then repetition boht bdh jayegi just like below
// const productOne: {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
// } = {
//   name: "Macbook",
//   stock: 40,
//   price: 300000,
//   photo: "https://image.png",
// };
// so we can solve it with interface

getdata(productOne);

//with interface
interface Product {
  name: string;
  stock: number;
  price: number;
  photo: string;
}

//or you can also able to use type

//   type Product = {
//     name: string;
//     stock: number;
//     price: number;
//     photo: string;
//   }

type getDataTypes2 = (products: Product) => void;

const getdata2: getDataTypes2 = (products) => {
  console.log(products);
};

const productTwo: Product = {
  name: "Macbook",
  stock: 40,
  price: 300000,
  photo: "https://image.png",
};

getdata2(productTwo);

//---- Apart from question mark there is one more property is readonly if we set readonly then we not able to change it

///////////// Never type

const errorHandler = () => {
  throw new Error();
};

/////////// classes in Typescript

//in ts we have a access modifiers (public, private, protected) to control the visibility of class members. private modifer will be access only in that class we can make it accesable with another function who will return private property
//protected accessor we can access in the extended class but private still not able to access in extended class

class player {
  constructor(
    private height: number,
    public weight: number,
    protected power: number
  ) {}

  getMyHeight = () => this.height;
}

class player2 extends player {
  special: boolean;
  constructor(height: number, weight: number, power: number, special: boolean) {
    super(height, weight, power);
    this.special = special;
  }

  getMyPower = () => this.power; //here we can access power but not height because of private
}

const ronaldo = new player2(5, 80, 350, true);
console.log(ronaldo.getMyHeight());
console.log(ronaldo.getMyPower());

//also explore get and set in classes with ts

////// classes with interface

interface ProductType {
  name: string;
  price: number;
  stock: number;
  offer?: boolean;
}

interface GetIDF {
  getId: () => string;
}

class ProductCls implements ProductType, GetIDF {
  private id: string = String(Math.ceil(Math.random() * 1000));

  constructor(
    public name: string,
    public price: number,
    public stock: number
  ) {}

  getId = () => this.id
}

const product1  = new ProductCls("Mackbook", 13000, 35)
console.log(product1.getId())
