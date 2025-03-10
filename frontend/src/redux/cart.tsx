import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  numOfItems: number;
  cannotAddItem: boolean;
};

export const cart = createSlice({
  name: "cart",
  initialState: {
    numOfItems: 0,
    cannotAddItem: false,
  } as CartState,
  reducers: {
    incrementNumOfItems: (state) => {
      state.numOfItems += 1;
    },
    decrementNumOfItems: (state) => {
      state.numOfItems -= 1;
    },
    setNumOfItems: (state, action: PayloadAction<number>) => {
      state.numOfItems = action.payload;
    },
    setCannotAddItem: (state, action: PayloadAction<boolean>) => {
      state.cannotAddItem = action.payload;
    },
  },
});

export const { incrementNumOfItems, decrementNumOfItems, setNumOfItems, setCannotAddItem } =
  cart.actions;
export default cart.reducer;
