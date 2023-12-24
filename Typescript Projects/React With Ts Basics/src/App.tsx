// import { FormEvent, useState } from "react";
// import Box, { GenericComponent } from "./components/Box";

// interface Person {
//   name: string;
//   age: number;
// }

// function App() {
//   const [val, setVal] = useState<string>("");
//   const [user, setUser] = useState<Person>();

//   const func1 = (a: string) => {
//     console.log(a);
//   };

//   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//   console.log(user)
//   };

//   return (
//     <>
//       <Box heading="Hello world" count={50} func1={func1}>
//         <h3>This is children</h3>
//       </Box>

//       <GenericComponent label="Search" value={val} setter={setVal} />

//       <form onSubmit={submitHandler}>
//         <h1>State with interface</h1>
//         <input
//           type="number"
//           placeholder="Age"
//           value={user?.age || ""}
//           onChange={(e) =>
//             setUser((prev) => ({
//               ...prev!, //not mtlb not undefined
//               age: Number(e.target.value),
//             }))
//           }
//         />

//         <input
//           type="text"
//           placeholder="Name"
//           value={user?.name || ""}
//           onChange={(e) =>
//             setUser((prev) => ({
//               ...prev!, //not mtlb not undefined
//               name: e.target.value,
//             }))
//           }
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// export default App;

////////////////////////////// use context hook  //////////////////////////////

// import { ReactNode, createContext, useState } from "react";
// import ThemeComp from "./components/ThemeComp";

// type ThemeType = "light" | "dark";

// interface ThemeContextType {
//   theme: ThemeType;
//   toggleTheme: () => void;
// }

// export const ThemeContext = createContext<ThemeContextType>({
//   theme: "light",
//   toggleTheme: () => {},
// });

// const ThemeProvider = ({ children }: { children: ReactNode }) => {
//   const [theme, setTheme] = useState<ThemeType>("light")

//   const toggleTheme = () =>{
//     setTheme(prev=> prev === "dark" ? "light" : "dark")
//   }
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// function App() {
//   return (
//     <>
//       <ThemeProvider>
//        <ThemeComp />
//       </ThemeProvider>
//     </>
//   );
// }

// export default App;

///////////////////////////////// useReducer hook //////////////////////////////////
import { useReducer } from "react";

type StateType = {
  count: number;
};

type ActionType =
  | {
      type: "Increment";
      payload: number;
    }
  | {
      type: "Decrement";
      payload: number;
    };

const initialState: StateType = {
  count: 0,
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = ():void=>{
    dispatch({type: "Increment", payload: 1})
  }

  const decrement = ():void=>{
    dispatch({type: "Decrement", payload: 1})
  }


  return (
    <>
      <div>
        <h1>Count Change</h1>

        <p>Count: {state.count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
}

export default App;
