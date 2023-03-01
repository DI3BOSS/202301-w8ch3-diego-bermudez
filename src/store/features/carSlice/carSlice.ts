import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarsStructure } from "../../../types";

const intitialCarState = [] as CarsStructure;
const carSlice = createSlice({
  name: "car",
  initialState: intitialCarState,
  reducers: {
    loadCars: (
      currentCarsState: CarsStructure,
      action: PayloadAction<CarsStructure>
    ) => [...action.payload],
  },
});

export const { loadCars: loadCarsActionCreator } = carSlice.actions;
export const carReducer = carSlice.reducer;
