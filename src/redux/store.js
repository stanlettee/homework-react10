import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { userReducer } from "./users/usersSlice"

export const store = configureStore({
  reducer: {
    contacts:  contactsReducer,
    user: userReducer
  },
});