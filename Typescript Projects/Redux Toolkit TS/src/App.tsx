import { useState } from "react";
import { StateType, decrement, increment, incrementByValue } from "./reduxToolkit/store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [val, setVal] = useState<number>(0);
  const dispatch = useDispatch();
  const count = useSelector((state: StateType) =>  state.count);
  console.log("count",count)

  return (
    <>
      <div>
        <h1>Redux Toolkit</h1>

        <h2>Count: {count}</h2>
        <button onClick={()=> dispatch(increment())}>+</button>
        <button disabled={val < 0} onClick={()=> dispatch(decrement())}>-</button>
        <input
          type="number"
          value={val}
          onChange={(e) => setVal(Number(e.target.value))}
        />
        <button  onClick={() => dispatch(incrementByValue(val))}>+</button>
      </div>
    </>
  );
}

export default App;
