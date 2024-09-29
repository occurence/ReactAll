import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts, selectError, selectIsLoading } from '../../redux/contacts/contactsSelector';
import { fetchContacts } from '../../redux/contacts/contactsOperation';
import { ContactListItem } from './ContactListItem/ContactListItem';
import { Loader } from '../Loader/Loader';

export const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
    const isError = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])
    return(
        <ul>
            {isLoading && !isError && <Loader />}
            {!isLoading && !isError && filteredContacts.length === 0 && (
                <p>The Phonebook is empty. Please add a contact.</p>
            )}
            {!isLoading && !isError && filteredContacts.length > 0 && filteredContacts.map(
                    filteredContact => (
                        <ContactListItem
                            key={filteredContact.id}
                            filteredContact={filteredContact}
                            //deleteContact={deleteContact}
                        />
                    )
                ) }
            
        </ul>
    )
}