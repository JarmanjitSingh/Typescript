"use strict";
//anotations
let a;
let userName;
let authenticated;
let hello; //this will consider any type
userName = "jarmanjit singh";
const mode = 'dark';
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
