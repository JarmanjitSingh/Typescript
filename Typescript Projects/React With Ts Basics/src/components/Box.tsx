import { Dispatch, ReactNode, SetStateAction } from "react";
//////////////// Props recieving /////////////////////////


//first wqy to recieve props with type
// const Box = ({heading}:{heading: string}) => {
//   return (
//     <div>
//         <h1>{heading}</h1>
//     </div>
//   )
// }


//another way to recieve props
type PropType = {
  heading: string;
  count: number;
  func1: (a: string)=> void;
  children: ReactNode
};

// const Box = ({heading, count, func1}: PropType) => {
//     func1("hello")
//   return (
//     <div>
//       <h1>{heading}</h1>
//       <p>{count}</p>
//     </div>
//   );
// };



//////////////// Children - is a reserved keyword in react //////////////


const Box = ({heading, count, func1, children}: PropType) => {
    func1("hello")
  return (
    <div>
      <h1>{heading}</h1>
      <p>{count}</p>
      {children}
    </div>
  );
};

export default Box;


///////////////// Generics with react /////////////
//jn tn T de nl comma jn fr T extends {}

type InputValType = string | number

export const GenericComponent = <T extends InputValType>({label, value, setter}: {label: string, value: T, setter: Dispatch<SetStateAction<string>>})=>{
  return (
    <div>
     <h1>Generic Component</h1>

     <form >
      <label >{label}</label>
      <input type="text" value={value} onChange={(e)=> setter(e.target.value)} />
      <button type="submit">Submit</button>
     </form>
    </div>
  )
}