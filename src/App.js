import './App.css';
import { Component } from 'react';
import { Contacts } from "./components/Contacts"
import Phonebook from "./components/Phonebook"

export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  handleChange = (name) => {
    this.setState({filter: name});
  }

  addContact = (name, number) => {
    const newId = this.state.contacts.length > 0 ? this.state.contacts.length : 1
    const newContact = {
      id: `id-${newId}`,
      name: name,
      number: number
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }))
  }

  render() {
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    return <div className="container">
      <Phonebook addContact={this.addContact}/>
      <Contacts contacts={visibleContacts} handleChange={this.handleChange} value={this.state.filter}/>
    </div>
  }
} 


