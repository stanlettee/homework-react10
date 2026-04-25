export const getContacts = state => state.contacts.contacts

export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = state => {
    if (state.contacts.filter === "") {
        return state.contacts.contacts
    } else {
        return state.contacts.contacts.filter(contact => contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase()))
    }

    
}
