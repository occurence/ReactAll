import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div>
      <fieldset style={{ width: '400px' }}>
        <legend>New Contact</legend>
        <ContactForm />
      </fieldset>
      <fieldset style={{ width: '400px' }}>
        <legend>Phonebook</legend>
        <Filter/>
        <ContactList/>
      </fieldset>
    </div>
  );
};