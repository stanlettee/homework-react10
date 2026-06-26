import { Contacts } from "../../components/Contacts/Contacts"
import { Phonebook } from "../../components/Phonebook/Phonebook"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from "./HomePage.module.css"
import { Header } from "../../components/Header/Header";

import {
  selectFilter,
  selectFilteredContacts
} from "../../redux/contacts/contactsSelectors";

import {
  addContact,
  removeContact,
  fetchContacts
} from "../../redux/contacts/contactsOperation";

import { setFilter } from '../../redux/contacts/contactsSlice';

export const HomePage = () => {
  const filter = useSelector(selectFilter);
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      
      <div className={styles.container}>

      <Phonebook
        addContact={(name, number) =>
          dispatch(addContact({ name, number }))
        }
      />

      <Contacts
        deleteContact={(id) => dispatch(removeContact(id))}
        handleChange={(value) => dispatch(setFilter(value))}
        contacts={filteredContacts}
        filter={filter}
      />

    </div>
    

  );
}