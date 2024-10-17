import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
   count: number;
}

const initialState: CounterState = {
   count: 0,
};

const counterSlice = createSlice({
   name: "counter",
   initialState: initialState,
   reducers: {
      increment: (state) => {
         state.count += 1;
      },
      decrement: (state) => {
         state.count -= 1;
      },
   },
   //    extraReducers: (builder) => {
   //     builder.addCase(increment, (state) => {
   //        state.count += 1
   //     })
   //    },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
