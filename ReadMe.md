# Install Typescript -- coder dost

1. install typescript globally by npm i -g typescript
2. install in a project npm i init after setup run npm i typescript 

3. typescript is compiled in javascript so run npx tsc index.ts in the terminal you can see the new index.js has been created if typescript has been globally installed then it will be compiled only with tsc index.ts

# Annotations

let a:number = 45

let num : number;
num = 12;

const names:string[] = []
names.push("hi")

function sum(a:number, b:numberORstring){
    return a+b
}

# Tuples

let address = [number, string, number]
address = [111, "kljafd", 537] ede vich specifically define kita houga ki array de vich sirf 3 values hongia pehli te teeji number and dooji string

# Types in object

let person : {name: string} //here we define the objects of person only have one key of string value
person = {name: "jarmanjit singh"}

if you want to add optional key in the object then you can use question mark

let person: {name: string, age?: number}
person = {name: "jarmanjit singh", age: 23}

# Inerfaces

interface Person{
    name: string;
    age: number;
    id: number;
}

let p : person;

p = {
    name: "Jarmanjit singh",
    age: 23,
    id: 285
}

# union and intersection type

interface Student{
    name: string;
    rollNumber: number;
    age: number;
}

let p1 : Person | Student; //union -- kise ek diya properties v hongia te chlju

p1 = {name: "jarman", rollNumber: 17, id: 285} OR
p1 = {name: "jarman", rollNumber: 17, id: 285, age: 23}

let p2 : Person & Student //intersection -- dova diya properties honiaa chahidia

# Type alias 

type Count = string | number;
let c : Count;

c = 1; //right
c = "jarman" //right
c = false //wrong

# Never Type

type x =  string & number //so type of x is never

const n: [] = [] //ethe v type define ni kiti so edi v by default never type hougi 
n.push("hello") //error dauga because of never type

# TypeScript - Thapa Technical 

install global by npm i -g typescript for version check tsc --v for compiling tsc file name and if even tsc this will compile all your ts files into js files
and we dont need node modules or npm init so i am deleting all other files

and we are facing error after compilation in ts file so comment in ts file //@ts-ignore and the error will gone

* TS configuration file -- if we have error in our ts file and compile it then it will compile. so we can configure ts file and in this file we can uncomment 

1. tsc --init and you see file will be created
2. search noEmitOnError in this file and uncomment it. but it will create a js file if we use tsc index.ts so we use only tsc then it will not create the js file or you can use below method
3. there is also a alternate command while compiling : tsc --noEmitOnError index.ts