import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";

export const getUserData = createAsyncThunk("auth/setDatas", async () => {
  try {
    const responce = await axios.post("/users/me");
    return responce?.data;
  } catch (error) {
    console.log("Error in Store Async thunk in Error Api Catch Block", error);
  }
});

export const LogoutUserFun = createAsyncThunk("auth/deleteData", async () => {
  try {
    const responce = await axios.post("/users/logout");
    return responce;
  } catch (error) {
    console.log(
      "Error in Logout Store Async thunk in Error Api Catch Block",
      error
    );
  }
});

// export const RegisterUser = createAsyncThunk("auth/register", async (FormData) => {

//     try {

//         const responce = await axiosSimple.post(USERS.REGISTER_USER_API, FormData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         });
//         if (responce?.data?.message) {
//             alert(responce?.data?.message);
//         }
//         if (responce?.data?.success == "false") {
//             alert("Something is wrong plz check...");
//         }
//         console.log("respce>>>>>", responce);
//         return responce;

//     } catch (error) {
//         console.log("Error in Logout Store Async thunk in Error Api Catch Block", error);
//     }

// });
