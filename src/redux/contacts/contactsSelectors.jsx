import { createSelector } from "reselect";

export const selectContacts = state => state.contacts.contacts

export const selectFilter = state => state.contacts.filter;


export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        if (filter === "") {
            return contacts
        } else {
            return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        }
    }
)