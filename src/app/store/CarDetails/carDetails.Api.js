import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useRouter } from "next/navigation";
const { CancelToken } = axios;
const source = CancelToken.source();

export const getOneCarData = createAsyncThunk("auth/getOneCars", async (id) => {
  console.log("<<<<<<<<<<id", id);
  try {
    const responce = await axios.post(`/api/cars/getonecar/${id}`, {
      cancelToken: source.token,
    });
    //  return () => abortController.abort();
    return responce?.data;
  } catch (error) {
    console.log(
      "Error in Store Async thunk in Error GetCarsList Api Catch Block",
      error
    );
  }
});
