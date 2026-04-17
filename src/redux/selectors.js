// selectors.js: Інструменти для спрощення отримання даних у компонентах.
import { FILTER_TYPES } from "./constants";

export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const filteredContacts = state => {
    if (FILTER_TYPES.filter === "") {
        return state.contacts
    } else {
        return state.contacts.filter(contact => contact.name.toLowerCase().includes(state.filter.toLowerCase()))
    }

    
}
