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

  getId = () => this.id;
}

const product1 = new ProductCls("Mackbook", 13000, 35);
console.log(product1.getId());

////////////////// Type Assertion
//Type assertion in TypeScript is a way to tell the compiler that you know more about the type of a value than it does
//like if we access the dom element of button and ts file is not know the button is exist or not because ts in not compiled yet in js so we can override with two methods "as" keyword or angle bracket

const btn = document.getElementById("btn") as HTMLElement;
// const btn = <HTMLElement> document.getElementById("btn");
// const btn = document.getElementById("btn")!; that means not null kuch v ho skda pr null ni houga

//btn.onclick

//in case of other elements who have its own properties so ona vich sanu specifically htmlelement override krna pena for eg

const img = document.getElementById("imgTag") as HTMLImageElement;
//img.src

//if we can do it with query selector with tag name then it will know the src method on img tag is exist

const img2 = document.querySelector("img")!;
//img2.src

const myform = document.getElementById("myForm") as HTMLFormElement;
const inputEle = document.querySelector("#myForm > input") as HTMLInputElement;

myform.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const inputNumber = Number(inputEle.value);
  console.log(typeof inputNumber);

  const h2 = document.createElement("h2");
  h2.textContent = String(inputNumber + 20);

  const body = document.querySelector("body")!;
  body.append(h2);
};

/////////// key of -- is used for dynamic property access

interface Person {
  name: string;
  email: string;
}

const myObj: Person = {
  name: "Jarmanjit Singh",
  email: "jarmanjits176@mail.com",
};

//Below function gives an error because key kuch v ho skdi aa pr myObj de vicho bs name jn email e access kr skde aa
// const getData = (key: string): string => {
//   return myObj[key]
// };

const getData3 = (key: keyof Person): string => {
  return myObj[key];
};

getData3("email");

//using type assertion
//if we dont know the Person then we can use type assertion to access dynamic values

let key = "name";

myObj[key as keyof typeof myObj];

////////////////////// Types  Utility /////////
// utility types are predefined generic types that provide common transformations or operations on other types.

//1. Partial<Type>: Creates a type with all properties of the provided type set to optional.
interface engineer {
  name: string;
  email: string;
}

type engineerOptional = Partial<engineer>; // engineerOptional is { name?: string; age?: number; }

//2. Required<Type>: opposite of partial
interface PartialPerson {
  name?: string;
  age?: number;
}

type RequiredPerson = Required<PartialPerson>; // RequiredPerson is { name: string; age: number; }

// 3. Readonly<Type>: Creates a type with all properties of the provided type set to readonly.
type ReadonlyPerson = Readonly<Person>;

//4. Record<Keys, Type>: Creates a type with a set of properties specified by Keys of type Type.
type Fruit = "apple" | "banana" | "orange";
type FruitInventory = Record<Fruit, number>;

// FruitInventory is { apple: number; banana: number; orange: number; }

//5. Pick<Type, Keys>: removes all but the specified keys from an object type.
interface userData1 {
  name: string;
  age: number;
  job: string;
}

type PersonInfo = Pick<userData1, "name" | "age">; // PersonInfo is { name: string; age: number; }

//6. Omit<Type, Keys>: removes keys from an object type.
type datawithoutJob = Omit<userData1, "job">; // PersonWithoutJob is { name: string; age: number; }

//////////////////// below three utlity is apply on unions and above on keys

//7. Exclude<Type, ExcludedUnion>: The Exclude utility type creates a type by excluding the members of one type (ExcludedUnion) from another type (Type)
type MyNumbers = 1 | 2 | 3 | 4 | 5;
type ExcludeTwoThree = Exclude<MyNumbers, 2 | 3>; // ExcludeTwoThree is 1 | 4 | 5

//8. Extract<Type, Union>: The Extract utility type creates a type by extracting the members of one type (Union) that are assignable to another type (Type).
type ExtractTwoThree = Extract<MyNumbers, 2 | 3>; // ExtractTwoThree is 2 | 3

//9. NonNullable<Type>: The NonNullable utility type creates a type by excluding null and undefined from the given type (Type).
type MaybeString = string | null | undefined;
type NotNullableString = NonNullable<MaybeString>;

//10. Parameters<Type>: The Parameters utility type extracts the parameter types of a function type as a tuple.
type MyFunction = (name: string, age: number) => void;
type MyFunctionParameters = Parameters<MyFunction>; // MyFunctionParameters is [string, number]

//if you want from function or if from the type of functino then use above
const myFunc = (a: number, b: string) => {};
type MyFunctionParameters2 = Parameters<typeof myFunc>; // MyFunctionParameters is [string, number]

//11. ConstructorParameters<Type>: The ConstructorParameters utility type extracts the parameter types of a constructor function type as a tuple.
class MyClass {
  constructor(public name: string, public age: number) {}
}

type MyClassConstructorParameters = ConstructorParameters<typeof MyClass>; // MyClassConstructorParameters is [string, number]

//12. ReturnType<Type>: The ReturnType utility type extracts the return type of a function type.
type MyFunction2 = () => number;
type MyFunctionReturnType = ReturnType<MyFunction2>; // MyFunctionReturnType is number

//13. InstanceType<Type>: same as constructorparameter -- The InstanceType utility type extracts the instance type of a constructor function type.
type MyClassInstanceType = InstanceType<typeof MyClass>; // MyClassInstanceType is MyClass

const avengers: MyClassInstanceType = {
  name: "kjasdf",
  age: 54,
};

/////////////////////////////// Generics /////////////////////////////////

//Generic - generic apa use krde aa jdo apa nu pta nhi ki parameter keri type da houga udo fr Generic function bnane aa te oo ohi type le lende aa jeri apa paas krde aa

// Using T (a type parameter) to make the function generic
function identity<T>(arg: T): T {
  return arg;
}

// Calling the generic function with different types
let result1 = identity(5); // T is inferred as number
let result2 = identity("hello"); // T is inferred as string

///// With interface or type

interface People {
  name: string;
  age: number;
}

function human<T>(arg: T): T {
  return arg;
}

const people1 = {
  name: "jarman",
  age: 23,
};

const ans = human(people1); //this is one way
const ans1 = human<People>(people1); //this is the best way

//another example
interface Box<T> {
  value: T;
}

let box1: Box<number> = { value: 42 };
let box2: Box<string> = { value: "hello" };

// two parameters function

function twoArgFunc<T, U>(a: T, b: U): { a: T; b: U } {
  return { a, b };
}

const ans2 = twoArgFunc<number, string>(12, "singh");

/////// Constraints on Generics  or extends -- mtlb U de vich T diaa properties te honiaa e chahidiaa aa ode to ilava v ho skdia aa

type Job1 = {
  position: string,
  salary: number
}

type Job2 = {
  position: string,
  salary: number,
  mnc: boolean
}

const vacancy1:Job1 = {
  position: "Software Engineer",
  salary: 15
}

const vacancy2: Job2 = {
  position: "Data Analyst",
  salary: 14,
  mnc: true
}

function extendedFunction<T, U extends T>(a: T, b: U): { a: T; b: U } {
  return { a, b };
}

const ans3 = extendedFunction<Job1, Job2>(vacancy1, vacancy2)

//Another important generic example

type Humans = {
  name: string,
  age: number
}

const canadaPopulation: Humans[] = [
  {
    name: "john",
    age: 34
  },
  {
    name: "Smith",
    age: 24
  },
  {
    name: "rich",
    age: 58
  },
  {
    name: "rock",
    age: 40
  }
]

//this will be a basic logic of function lets convert it into a generic function
// function filterByPeoples = (arr: [], property: string, value: any) =>{
// arr.filter(item=> item[property] === value)
// }


//T means array of objects T is for type , T type of array T[] and U is the key of That Type object so the value is T[U]

const filterByPeoples = <T, U extends keyof T> (arr: T[], property: U, value: T[U]): T[] =>{
  return arr.filter(item=> item[property] === value)
}

const filteredHuman = filterByPeoples(canadaPopulation, "name", "john")
console.log(filteredHuman)
