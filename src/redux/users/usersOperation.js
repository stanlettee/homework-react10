import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "http://localhost:3001";

export const createUser = createAsyncThunk(
    "users/createUser",
    async (obj, thunkAPI) => {
        try {
            const response = await axios.post("/register", {
                email: obj.email,
                password: obj.password,
            });
            
            const data = response.data;
            console.log(data);
            
            // if (data.accessToken) {
            //     axios.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
            // }
            
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    "users/loginUser",
    async (obj, thunkAPI) => {
        try {
            const response = await axios.post("/login", {
                email: obj.email,
                password: obj.password,
            });
            const data = response.data;
            console.log(data);
            axios.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
            console.log(thunkAPI.getState(), data)
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const logoutUser = createAsyncThunk(
    "users/logoutUser",
    async (_, thunkAPI) => {
        console.log(thunkAPI.getState())
        localStorage.removeItem("token");
        axios.defaults.headers.common.Authorization = "";

    }
)