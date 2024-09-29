import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return(
    <div>
      <fieldset style={{ width: '400px' }}>
        <legend>New Contact</legend>
        <ContactForm />
      </fieldset>
      <fieldset style={{ width: '400px' }}>
        <legend>Phonebook</legend>
        {/* <Filter filter={filter} setFilterx={setFilterx}/> */}
        <Filter/>
        {/* <ContactList contacts={contacts} filterContact={filterContact} deleteContact={deleteContact}/> */}
        {/* <ContactList contacts={contacts} filter={filter}/> */}
        <ContactList/>
      </fieldset>
    </div>
  )
}