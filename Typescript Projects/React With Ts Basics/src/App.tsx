import { FormEvent, useState } from "react";
import Box, { GenericComponent } from "./components/Box";

interface Person {
  name: string;
  age: number;
}

function App() {
  const [val, setVal] = useState<string>("");
  const [user, setUser] = useState<Person>();

  const func1 = (a: string) => {
    console.log(a);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  console.log(user)
  };

  return (
    <>
      <Box heading="Hello world" count={50} func1={func1}>
        <h3>This is children</h3>
      </Box>

      <GenericComponent label="Search" value={val} setter={setVal} />

      <form onSubmit={submitHandler}>
        <h1>State with interface</h1>
        <input
          type="number"
          placeholder="Age"
          value={user?.age || ""}
          onChange={(e) =>
            setUser((prev) => ({
              ...prev!, //not mtlb not undefined
              age: Number(e.target.value),
            }))
          }
        />

        <input
          type="text"
          placeholder="Name"
          value={user?.name || ""}
          onChange={(e) =>
            setUser((prev) => ({
              ...prev!, //not mtlb not undefined
              name: e.target.value,
            }))
          }
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
