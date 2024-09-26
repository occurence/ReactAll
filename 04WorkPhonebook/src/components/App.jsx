import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const initialContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

export const App = () => {
  const savedContacts = localStorage.getItem('contacts');
  const [contacts, setContacts] = useState(
    savedContacts !== null ? JSON.parse(savedContacts) : initialContacts
  );

  const [filter, setFilter] = useState('');

  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts]);

  const addContact = newContact => {
    setContacts(prevState => [...prevState, newContact])
  }
  const deleteContact = id => {
    setContacts(prevState => prevState.filter(
      contact => contact.id !== id))
  }
  const setFilterx = filterValue => {
    setFilter(filterValue);
  }
  const filterContact = () => {
    // const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  // const { contacts, filter } = this.state;
  return(
    <div>
      <fieldset style={{ width: '400px' }}>
        <legend>New Contact</legend>
        <ContactForm contacts={contacts} addContact={addContact}/>
      </fieldset>
      <fieldset style={{ width: '400px' }}>
        <legend>Phonebook</legend>
        <Filter filter={filter} setFilterx={setFilterx}/>
        <ContactList contacts={contacts} filterContact={filterContact} deleteContact={deleteContact}/>
      </fieldset>
    </div>
  )

}