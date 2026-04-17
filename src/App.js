import './App.css';
import { Component } from 'react';
import Contacts from "./components/Contacts"
import Phonebook from "./components/Phonebook"
import contactsData from "./contacts.json";
import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts, getFilter } from  "./redux/selectors";   
import { addContact, removeContact, filterContacts } from "./redux/actions";

const App = () => {
  // state = {
  //   contacts: [],
  //   filter: '',
  //   hasError: false
  // }

  // deleteContact = (id) => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== id)
  //   }));
  // }

  // handleChange = (name) => {
  //   this.setState({filter: name});
  // }

  // addContact = (name, number) => {
  //   const newId = contactsData.contacts.length + 1
  //   const newContact = {
  //     id: `id-${newId}`,
  //     name: name,
  //     number: number
  //   }
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, newContact]
  //   }))
  //   localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  // }







  // componentDidUpdate(_prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //       };
  // }

              // fetch(`http://localhost:3000/contacts/`, {
            //     method: "PUT",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(this.state.contacts)
            // })
            // .then(res => res.json())
            // .then(data => console.log("Updated:", data))
            // .catch(error => console.error("Update failed:", error));

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  //   console.log("Timer has stopped");
  // }

  // componentDidCatch(error, info) {
  //   console.error("Error caught by ErrorBoundary:", error);
  //   console.log("Component stack:", info.componentStack);
  //   this.setState({ hasError: true });
  // }








    const contacts = useSelector(filteredContacts);
    const filter = useSelector(getFilter)
    console.log(filter)
    const dispatch = useDispatch();

    return (
        <div className="container">
          <Phonebook addContact={(name, number) => dispatch(addContact(name, number))}/>
          <Contacts deleteContact={(id) => dispatch(removeContact(id))} contacts={contacts} handleChange={(value) => dispatch(filterContacts(value))} value={filter}/>
        </div>
    )











  // componentDidMount() {
  //   this.interval = setInterval(() => console.log("tick"), 1000);
  //   const saved = localStorage.getItem("contacts")
  //   if (saved === "[]"){
  //     localStorage.setItem("contacts", JSON.stringify(contactsData.contacts))
  //     this.setState({ contacts: contactsData.contacts })
  //   } else {
  //     this.setState({ contacts: JSON.parse(saved) })
  //   }
    
    
  // }
}

export default App