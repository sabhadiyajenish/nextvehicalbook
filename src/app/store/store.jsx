"use client";
import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import Auth from "./Auth/auth.slice";
import CarStore from "./Car/car.slice";
import CarDetailsStore from "./CarDetails/carDetails.slice";
const rootReducer = combineReducers({
  userAuthData: Auth,
  carlistData: CarStore,
  carDetails: CarDetailsStore,
  //add all your reducers here
});

export const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware()
);
