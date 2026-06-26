import { createUser, loginUser, logoutUser } from "./usersOperation";
import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",

    initialState:{
        token: "",
        user:{
            email: "",
            id: null
        },
        error: null,
        loading: false,
        login: false,
    },

    extraReducers: builder => {
        builder.addCase(createUser.pending, state => {
            state.loading = true
        })
        
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })

        builder.addCase(createUser.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.accessToken
            state.loading = false
            state.login = true
            if (action.payload.accessToken) {
                localStorage.setItem("token", action.payload.accessToken);
            }
        })


        builder.addCase(loginUser.pending, state => {
            state.loading = true
        })
        
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.accessToken
            state.loading = false
            state.login = true
            if (action.payload.accessToken) {
                localStorage.setItem("token", action.payload.accessToken);
            }
        })


        builder.addCase(logoutUser.pending, state => {
            state.loading = true
        })
        
        builder.addCase(logoutUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })

        builder.addCase(logoutUser.fulfilled, (state, action) => {
            state.user = { email: null, id: null }
            state.token = ""
            state.loading = false
            state.login = false
        })
    }
})

export const userReducer = usersSlice.reducer