import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  componentDidMount(){
    const savedContacts = localStorage.getItem('contacts');
    if(savedContacts !== null){
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
    // else{
    //   this.setState({
    //     contacts: [
    //       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    //       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    //       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    //       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    //     ]
    //   })
    // }
  }
  componentDidUpdate(_prevProps, prevState){
    const { contacts } = this.state;
    if(prevState.contacts !== contacts){
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  }
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => (contact.id !== id)),
    }));
  }
  setFilter = filterValue => {
    this.setState({
      filter: filterValue,
    });
  }
  filterContact = () => {
    const { contacts, filter } = this.state;
    // return contacts.filter(contact => (contact.name.includes(filter)));
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterLowerCase));
  }
  render(){
    const { contacts, filter } = this.state;
    return (
      <div>
        <fieldset style={{ width: '400px' }}>
        <legend>Contact</legend>
          <ContactForm contacts={contacts} addContact={this.addContact}/>
        </fieldset><br />
          
        <fieldset style={{ width: '400px' }}>
          <legend>Phonebook</legend>
          <Filter filter={filter} setFilter={this.setFilter}/>
          <ContactList contacts={contacts} filterContact={this.filterContact} deleteContact={this.deleteContact}/>
        </fieldset><br />
      </div>
    )
  }
};
