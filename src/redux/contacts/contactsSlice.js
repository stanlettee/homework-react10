import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// const initialState = [{ id: 1, completed: false, text: "qwe" }];

const contactsSlice = createSlice({
  name: "contacts",

  initialState: {
    filter: '',
    contacts: [
    {
      id: "id-1",
      name: "Rosie Simpson",
      number: "459-12-56"
    },
    {
      id: "id-2",
      name: "Hermione Kline",
      number: "443-89-12"
    },
    {
      id: "id-3",
      name: "Eden Clements",
      number: "645-17-79"
    },
    {
      id: "id-4",
      name: "Annie Copeland",
      number: "227-91-26"
    }
]
},

  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },

      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    removeContact: {
      reducer(state, action) {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      },

      prepare(id) {
        return {
          payload: id
        }
      }
    },
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload
      },

      prepare(text) {
        return {
          payload: text
        }
      }
    }
  },
});

export const { addContact, removeContact, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;