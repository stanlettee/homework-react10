import { createSelector } from "reselect";
import { selectAll } from "./contactsSlice";

export const selectFilter = state => state.contacts.filter;

export const selectFilteredContacts = createSelector(
    [selectAll, selectFilter], 
    (contacts, filter) => {
        if (!contacts) return []; 
        
        const normalizedFilter = filter.toLowerCase().trim();
        
        if (normalizedFilter === "") {
            return contacts;
        }
        
        return contacts.filter(contact => 
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    }
);