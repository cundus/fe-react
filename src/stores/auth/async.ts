import { api } from "@/lib/api";
import { IUser } from "@/types/user";
import { RegisterSchema } from "@/validations/registerSchema";
import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const registerAsync = createAsyncThunk<void, RegisterSchema>(
   "auth/register",
   async (data, thunkAPI) => {
      try {
         const res = await api.post("/auth/register", data);
         console.log(res.data);

         toast.success("Register Success!");
      } catch (error) {
         console.log(error);
         if (error instanceof Error) {
            toast.error(error.response?.data.message);
            return thunkAPI.rejectWithValue(error.message);
         }
      }
   }
);

export const loginAsync = createAsyncThunk<
   string,
   { username: string; password: string }
>("auth/login", async (data, thunkAPI) => {
   try {
      const res = await api.post("/auth/login", data);
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      return res.data.token;
   } catch (error) {
      console.log(error);
      if (error instanceof Error) {
         toast.error(error.response?.data.message);
         return thunkAPI.rejectWithValue(error.message);
      }
   }
});

export const checkAuth = createAsyncThunk<
   {
      user: IUser;
      token: string;
   },
   undefined
>("auth/checkAuth", async (_, thunkAPI) => {
   try {
      const token = localStorage.getItem("token");
      if (!token) {
         return thunkAPI.rejectWithValue("");
      }
      const res = await api.get("/auth/me");

      if (!res.data) {
         return thunkAPI.rejectWithValue("no user");
      }

      return {
         user: res.data,
         token: token,
      };
   } catch (error) {
      console.log(error);
      if (error instanceof Error) {
         toast.error(error.response?.data.message);
         return thunkAPI.rejectWithValue(error.message);
      }
   }
});
