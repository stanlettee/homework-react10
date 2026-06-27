import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "http://localhost:3001";


// GET
export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");

      return response.data;

    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);



// DELETE
export const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);

      return contactId;

    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);


// POST
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post(
        "/contacts",
        contactData
      );

      return response.data;

    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);