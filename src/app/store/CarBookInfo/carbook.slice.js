"use client";
import { createSlice } from "@reduxjs/toolkit";
const CarBookInfoStore = createSlice({
  name: "carBookInfo",
  initialState: {
    carInfo: [],
    pickupLocation: "",
    pickUpDate: "",
    returnDates: "",
    childSeat: 0,
    winterWheel: 0,
    roofBox: 0,
    driver: false,
    extraKilometers: 0,
    insurance: "Basic",
    loading: false,
  },
  reducers: {
    //this is used for without calling apis directy send data into redux
    AddCarBookInfo: (state, action) => {
      state.carInfo = action?.payload || [];
    },
    AddChildSeat: (state, action) => {
      state.childSeat = action?.payload || 0;
    },
    AddWinterWheel: (state, action) => {
      state.winterWheel = action?.payload || 0;
    },
    AddRoofBox: (state, action) => {
      state.roofBox = action?.payload || 0;
    },
    AddDriver: (state, action) => {
      state.driver = action?.payload || false;
    },
    AddExtraKilometers: (state, action) => {
      state.extraKilometers = action?.payload || 0;
    },
    AddInsurance: (state, action) => {
      state.insurance = action?.payload || "Basic";
    },
    AddPickUpInfo: (state, actions) => {
      state.pickupLocation = actions?.payload?.pickupLocation;
      state.pickUpDate = actions?.payload?.pickUpDate;
      state.returnDates = actions?.payload?.returnDates;
    },
  },
  extraReducers(builder) {},
});
const { actions, reducer } = CarBookInfoStore;
export const {
  AddCarBookInfo,
  AddChildSeat,
  AddWinterWheel,
  AddRoofBox,
  AddDriver,
  AddExtraKilometers,
  AddInsurance,
  AddPickUpInfo,
} = actions;
export default reducer;
