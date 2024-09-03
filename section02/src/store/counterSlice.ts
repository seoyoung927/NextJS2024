import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState{
  value: number;
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {   
    increment: (state: { value: number; }) => ({
      value: state.value + 1,
    }),
    decrement: (state: { value: number; }) => ({
      value: state.value - 1,
    }),

  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
