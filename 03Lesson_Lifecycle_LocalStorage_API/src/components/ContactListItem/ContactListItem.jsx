import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ contact, filteredContact, deleteContact }) => {
    const handleDelete = () => {
        // deleteContact(contact.id);
        deleteContact(filteredContact.id)
    }
    return(
        <li className = {css.contactListItem}>
            {/* {contact.name}: {contact.number} */}
            {filteredContact.name}: {filteredContact.number}
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}
ContactListItem.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    filteredContact: PropTypes.object.isRequired,
}