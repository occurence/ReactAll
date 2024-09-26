import { useState } from 'react';
import {nanoid} from 'nanoid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export const ContactForm = ({ contacts, addContact }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleNumberChange = e => {
        setNumber(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        
        if(name.toLowerCase() === '' || number.toLowerCase() === ''){
            return;
        }

        const existingContact = contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase());
        
        if(existingContact){
            alert(`${name} is already in Phonebook`);
            return;
        }

        addContact({
            id: nanoid(),
            name: name.trim(),
            number: number.trim(),
        })

        setName('');
        setNumber('');
    }
    // render(){
        // const { name, number } = this.state;
        return(
            <div>
                <form onSubmit={handleSubmit} className={css.form}>
                    <label className={css.formField}>
                        <p className={css.formLabel}>Name</p>
                        <input
                            type="text"
                            name="name"
                            // add \ before - in [' \-] to make it work (LMS)
                            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                            required
                            value={name}
                            onChange={handleNameChange}
                        />
                    </label>
                    <label className={css.formField}>
                        <p className={css.formLabel}>Number</p>
                        <input
                            type="tel"
                            name="number"
                            // add \ before - in [\-.\s] to make it work (LMS)
                            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number}
                            onChange={handleNumberChange}
                        />
                    </label>
                    <button type="submit" className={css.formButton}>
                        Add Contact
                    </button>
                </form>
            </div>
        )
    // }
}
ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
}