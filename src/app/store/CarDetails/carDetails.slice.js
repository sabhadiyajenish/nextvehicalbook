"use client";
import { createSlice } from "@reduxjs/toolkit";
import { getOneCarData } from "./carDetails.Api";
const CarDetailsStore = createSlice({
  name: "cardetails",
  initialState: {
    carData: [],
    loading: false,
  },
  reducers: {
    //this is used for without calling apis directy send data into redux
    AddCarDetails: (state, action) => {
      state.carData = action?.payload || action?.payload?.data || [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getOneCarData.pending, (state, param) => {
        state.loading = true;
      })
      .addCase(getOneCarData.fulfilled, (state, action) => {
        const { payload } = action;
        state.carData = payload?.carData;
        state.loading = false;
      })
      .addCase(getOneCarData.rejected, (state, param) => {
        state.loading = false;
      });
  },
});
const { actions, reducer } = CarDetailsStore;
export const { AddCarDetails } = actions;
export default reducer;
