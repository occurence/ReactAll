import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ filteredContact, deleteContact }) => {
    const handleDelete = () => {
        deleteContact(filteredContact.id);
    }
    return(
        <li className={css.contactListItem}>
            {filteredContact.name}: {filteredContact.number}
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}
ContactListItem.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    filteredContact: PropTypes.object.isRequired,
}