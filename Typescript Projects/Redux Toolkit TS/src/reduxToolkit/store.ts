/////////////////////// using reducer and action

//import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// interface StateType {
//   count: number;
// }

// const increment = createAction("increment");
// const decrement = createAction("increment");

// const initialState: StateType = {
//   count: 0,
// };
// const rootReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state) => {
//       state.count++;
//     })
//     .addCase(decrement, (state) => {
//       state.count--;
//     });
// });


////////////////////// using slices ////////////////////

import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

export interface StateType {
  count: number;
}
const initialState: StateType = {
  count: 0,
};

const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state)=>{
            state.count++
        },
        decrement: (state)=>{
            state.count--
        },
        incrementByValue: (state, action:PayloadAction<number>)=> {
            state.count += action.payload 
        }
    }
})


export const {increment, decrement, incrementByValue} = countSlice.actions


export const store = configureStore({
  reducer: countSlice.reducer
});
