import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DishProps } from "../libs/types";

type DishState = {
  showItemCounter: boolean;
  initialDishes: DishProps[];
  dishes: DishProps[];
  isDishesExists: boolean;
};

export const dish = createSlice({
  name: "dish",
  initialState: {
    showItemCounter: false,
    initialDishes: [],
    dishes: [],
    isDishesExists: true,
  } as DishState,
  reducers: {
    setShowItemCounter: (state, action: PayloadAction<boolean>) => {
      state.showItemCounter = action.payload;
    },
    setInitialDishes: (state, action: PayloadAction<DishProps[]>) => {
      state.initialDishes = action.payload;
    },
    setDishes: (state, action: PayloadAction<DishProps[]>) => {
      state.dishes = action.payload;
    },
    setIsDishesExists: (state, action: PayloadAction<boolean>) => {
      state.isDishesExists = action.payload;
    },
  },
});

export const {
  setShowItemCounter,
  setInitialDishes,
  setDishes,
  setIsDishesExists,
} = dish.actions;
export default dish.reducer;
