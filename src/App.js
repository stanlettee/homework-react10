import './App.css';
import { Component } from 'react';
import { Contacts } from "./components/Contacts"
import { Phonebook } from "./components/Phonebook"
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getFilteredContacts } from  "./redux/contacts/contactsSelectors";   
import { addContact, removeContact, setFilter } from "./redux/contacts/contactsSlice";

const App = () => {
    const filter = useSelector(getFilter)
    const filteredContacts = useSelector(getFilteredContacts)
    const dispatch = useDispatch();

    return (
        <div className="container">
          <Phonebook addContact={(name, number) => dispatch(addContact(name, number))}/>
          <Contacts deleteContact={(id) => dispatch(removeContact(id))} handleChange={(value) => {dispatch(setFilter(value))}} contacts={filteredContacts} filter={filter}/>
        </div>
    )
}

export default App