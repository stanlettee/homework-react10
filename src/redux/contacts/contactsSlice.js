import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  fetchContacts,
  removeContact,
} from "./contactsOperation";

import { createEntityAdapter } from '@reduxjs/toolkit'

const contactsAdapter = createEntityAdapter();

const contactsSlice = createSlice({
  name: "contacts",

  initialState: contactsAdapter.getInitialState({
    loading: false,
    error: null,
    filter: "",
  }),

  // initialState: {
  //   filter: "",
  //   contacts: [],
  //   error: null,
  //   loading: false,
  // },

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
      contactsAdapter.setAll(state, action.payload);
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
      contactsAdapter.addOne(state, action.payload)
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
      contactsAdapter.removeOne(state, action.payload)
      state.loading = false;
    });

    builder.addCase(removeContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

  },
});

export const {selectAll, selectById, selectIds} = contactsAdapter.getSelectors(
  
  (state) => state.contacts)
export const { setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;