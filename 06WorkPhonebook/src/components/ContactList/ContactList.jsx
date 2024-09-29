import { ContactListItem } from '../ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

const getFilteredContacts = (contacts, filter) => {
    return contacts?.filter(contact => 
        contact.name.toLowerCase().includes(filter.toLowerCase())
        // contact.name.toLowerCase().includes(filter.filterValue.toLowerCase())
        // contact.name.toLowerCase().includes(filter.filterInitialState.toLowerCase())
    );
}

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const filteredContacts = getFilteredContacts(contacts, filter);
    return (
        <ul>
            {filteredContacts?.map(
                filteredContact => (
                    <ContactListItem
                        key={filteredContact.id}
                        filteredContact={filteredContact}
                        // deleteContact={deleteContact}
                    />
                ))}
            
        </ul>
    )
}
// ContactList.propTypes = {
//     filterContact: PropTypes.func.isRequired,
//     deleteContact: PropTypes.func.isRequired,
// }