"use strict";
//anotations
let a;
let userName;
let authenticated;
let hello; //this will consider any type
userName = "jarmanjit singh";
const mode = "dark";
//other way to write
let userName2 = "Jarmanjit singh";
//function in ts
const func = (a, b) => {
    return String(a * b);
};
let userEmail = "jarmanjit Singh";
const func2 = (a, b) => {
    return a.concat(b);
};
//// Arrays in typescript
let arr = [846, 68783, 674, 564];
let arr2 = ["dfa", "fdas", "dsaf"];
let arr3 = [5465, 5465, 545, 54];
let arr4 = ["sdsd", "jdsf", "krdf"];
let arr5 = [55454, true, 5756, false];
//// Tuples - are also same but it will define the fixed number of array and the fixed types
let address = ["punjab", 142154, "punjab"];
let obj1 = {
    height: 5.9,
    weight: 78,
    adult: true,
    optionalAddress: "amritsar",
};
const obj2 = {
    height: 5.9,
    weight: 80,
    adult: true,
    gender: "male",
};
const kedal = {
    height: 55,
    weight: 55,
    adult: false,
    gender: "male",
    func: (n, m) => {
        console.log(n * m);
    },
};
kedal.func(2, 4);
//optional Parameter
const func3 = (a, b, c) => {
    if (typeof c === "undefined")
        return a * b; //this is called type guard
    return a * b * c;
};
func3(10, 20);
//default Parameter
const func4 = (a, b, c = 30) => {
    return a * b * c;
};
func4(10, 20);
const func5 = (...m) => {
    return m;
};
func5(12, 54, 54, 979, 65, 32, 65, 54164, 4);
const simpleFunc = function lol(n) {
    console.log("simple function with type alias", n);
    return n;
};
simpleFunc(4);
//OR
function lol(n) {
    console.log(n);
    return n;
}
lol("lol func");
const getdata = (products) => {
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
const getdata2 = (products) => {
    console.log(products);
};
const productTwo = {
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
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.getMyHeight = () => this.height;
    }
}
class player2 extends player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.getMyPower = () => this.power; //here we can access power but not height because of private
        this.special = special;
    }
}
const ronaldo = new player2(5, 80, 350, true);
console.log(ronaldo.getMyHeight());
console.log(ronaldo.getMyPower());
class ProductCls {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.ceil(Math.random() * 1000));
        this.getId = () => this.id;
    }
}
const product1 = new ProductCls("Mackbook", 13000, 35);
console.log(product1.getId());
////////////////// Type Assertion
//Type assertion in TypeScript is a way to tell the compiler that you know more about the type of a value than it does
//like if we access the dom element of button and ts file is not know the button is exist or not because ts in not compiled yet in js so we can override with two methods "as" keyword or angle bracket
const btn = document.getElementById("btn");
// const btn = <HTMLElement> document.getElementById("btn");
// const btn = document.getElementById("btn")!; that means not null kuch v ho skda pr null ni houga
//btn.onclick
//in case of other elements who have its own properties so ona vich sanu specifically htmlelement override krna pena for eg
const img = document.getElementById("imgTag");
//img.src
//if we can do it with query selector with tag name then it will know the src method on img tag is exist
const img2 = document.querySelector("img");
//img2.src
const myform = document.getElementById("myForm");
const inputEle = document.querySelector("#myForm > input");
myform.onsubmit = (e) => {
    e.preventDefault();
    const inputNumber = Number(inputEle.value);
    console.log(typeof inputNumber);
    const h2 = document.createElement("h2");
    h2.textContent = String(inputNumber + 20);
    const body = document.querySelector("body");
    body.append(h2);
};
const myObj = {
    name: "Jarmanjit Singh",
    email: "jarmanjits176@mail.com",
};
//Below function gives an error because key kuch v ho skdi aa pr myObj de vicho bs name jn email e access kr skde aa 
// const getData = (key: string): string => {
//   return myObj[key]
// };
const getData3 = (key) => {
    return myObj[key];
};
getData3("email");
//using type assertion 
//if we dont know the Person then we can use type assertion to access dynamic values
let key = "name";
myObj[key];
