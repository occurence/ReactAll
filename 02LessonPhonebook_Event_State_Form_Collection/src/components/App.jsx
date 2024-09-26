import { Component } from 'react';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    // filter: '',
  }
  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  }
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }
  render(){
    const { contacts } = this.state;
    return (
        <div>
          <fieldset style={{ width: '300px' }}>
            <legend>Phonebook</legend>
              <ContactForm contacts={contacts} addContact={this.addContact}/>
          </fieldset><br />
          <fieldset style={{ width: '400px' }}>
            <legend>Contacts</legend>
              <ContactList contacts={contacts} deleteContact={this.deleteContact}/>
          </fieldset>
        </div>
      );
  }
}