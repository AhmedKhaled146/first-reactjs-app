import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increamentCounter: (state) => {
      return (state += 1);
    },
    decreamentCounter: (state) => {
      return (state -= 1);
    },
  },
});
export const { increamentCounter, decreamentCounter } = counter.actions;
export default counter.reducer;
