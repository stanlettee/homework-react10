import './App.css';
import { Component } from 'react';
import Contacts from "./components/Contacts"
import Phonebook from "./components/Phonebook"

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    hasError: false
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
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

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
            fetch(`http://localhost:3000/contacts/`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.state.contacts)
            })
            .then(res => res.json())
            .then(data => console.log("Updated:", data))
            .catch(error => console.error("Update failed:", error));
        };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("Timer has stopped");
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error);
    console.log("Component stack:", info.componentStack);
    this.setState({ hasError: true });
  }

  render() {
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));

    if (this.state.hasError === false){
      return <div className="container">
        <Phonebook addContact={this.addContact}/>
        <Contacts deleteContact={this.deleteContact} contacts={visibleContacts} handleChange={this.handleChange} value={this.state.filter}/>
      </div>
    } else if (this.state.hasError === false) {
      return <div className="container">
          <h1>Your code has an error somewhere</h1>
      </div>
    }

  }

  componentDidMount() {
    this.interval = setInterval(() => console.log("tick"), 1000);
    fetch("http://localhost:3000/contacts")
      .then(res => res.json())
      .then(data => this.setState({ contacts: data }))
      .catch(error => console.error("Fetch error:", error));
    }
    
}

