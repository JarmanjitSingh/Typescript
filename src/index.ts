//anotations
let a:number;
let userName:string|number;
let authenticated:boolean;
let hello; //this will consider any type

userName = "jarmanjit singh"

//other way to write
let userName2 = <string>"Jarmanjit singh"


//function in ts 
const func = (a:number, b:number): string=>{
    return String(a * b)
}

////types define or type keyword or Type alias

type userData = string|number
let userEmail:userData = 'jarmanjit Singh'

//similarly type for functions
type funtionalType = (a: string, b: string) => string;

const func2:funtionalType = (a, b)=>{
return a.concat(b)
}
