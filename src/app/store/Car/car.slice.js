"use client";
import { createSlice } from "@reduxjs/toolkit";
import { getCarList } from "./car.Api";
const CarStore = createSlice({
  name: "user",
  initialState: {
    carList: [],
    loading: false,
  },
  reducers: {
    //this is used for without calling apis directy send data into redux
  },
  extraReducers(builder) {
    builder
      .addCase(getCarList.pending, (state, param) => {
        state.loading = true;
      })
      .addCase(getCarList.fulfilled, (state, action) => {
        const { payload } = action;
        state.carList = payload?.carData;
        state.loading = false;
      })
      .addCase(getCarList.rejected, (state, param) => {
        state.loading = false;
      });
  },
});
const { actions, reducer } = CarStore;
export const {} = actions;
export default reducer;
