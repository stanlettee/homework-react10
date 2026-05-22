import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  fetchContacts,
  removeContact,
} from "./contactsOperation";

const contactsSlice = createSlice({
  name: "contacts",

  initialState: {
    filter: "",
    contacts: [],
    error: null,
    loading: false,
  },

  reducers: {
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },

      prepare(text) {
        return {
          payload: text,
        };
      },
    },
  },

  extraReducers: builder => {

    // FETCH
    builder.addCase(fetchContacts.pending, state => {
      state.loading = true;
    });

    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });


    // ADD
    builder.addCase(addContact.pending, state => {
      state.loading = true;
    });

    builder.addCase(addContact.fulfilled, (state, action) => {
      state.contacts.push(action.payload);
      state.loading = false;
    });

    builder.addCase(addContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });


    // REMOVE
    builder.addCase(removeContact.pending, state => {
      state.loading = true;
    });

    builder.addCase(removeContact.fulfilled, (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );

      state.loading = false;
    });

    builder.addCase(removeContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

  },
});

export const { setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;