import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactListItem = ({ filteredContact }) => {
    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch(deleteContact(filteredContact.id));
    }
    return(
        <li className={css.contactListItem}>
            {filteredContact.name}: {filteredContact.number}
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}
// ContactListItem.propTypes = {
//     deleteContact: PropTypes.func.isRequired,
//     filteredContact: PropTypes.object.isRequired,
// }