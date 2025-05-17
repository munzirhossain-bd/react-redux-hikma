import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: "counter",
  initialState: [
    { id: 1, value: 1 },
    { id: 2, value: 0 }
  ],
  reducers: {
    increment: (state, action) => {
      const stateIndex = state.findIndex(c => c.id === action.payload);
      if (stateIndex !== -1) state[stateIndex].value += 1;
    },
    decrement: (state, action) => {
      const stateIndex = state.findIndex(c => c.id === action.payload);
      if (stateIndex !== -1) state[stateIndex].value -= 1;
    },
    incrementByAmount: (state, action) => {
      const { id, amount } = action.payload; // Use an object for id & amount
      const stateIndex = state.findIndex(c => c.id === id);
      if (stateIndex !== -1) state[stateIndex].value += amount;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
