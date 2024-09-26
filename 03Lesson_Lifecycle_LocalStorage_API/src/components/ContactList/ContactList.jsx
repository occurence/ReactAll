import { ContactListItem } from '../ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact, filterContact }) => {
    const filteredContacts = filterContact();
    return(
        <ul>
            {filteredContacts.map(filteredContact => (
                <ContactListItem
                    key={filteredContact.id}
                    // contact={contact}
                    filteredContact={filteredContact}
                    deleteContact={deleteContact}
                />
            ))}
            
        </ul>
    )
}
ContactList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    filterContact: PropTypes.func.isRequired,
}