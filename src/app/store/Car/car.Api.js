import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useRouter } from "next/navigation";

export const getCarList = createAsyncThunk("auth/getCars", async () => {
  try {
    const responce = await axios.post("api/cars/getcars");
    return responce?.data;
  } catch (error) {
    console.log(
      "Error in Store Async thunk in Error GetCarsList Api Catch Block",
      error
    );
  }
});
