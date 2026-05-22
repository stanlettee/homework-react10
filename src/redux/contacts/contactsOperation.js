import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

  "https://6a00a74f36fb6ad04de05a5c.mockapi.io";


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
      const response = await axios.delete(`/contacts/${contactId}`);

      return response.data;

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