import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CounterSliceState = { value: number };
const initialState: CounterSliceState = { value: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterSliceState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state: CounterSliceState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
