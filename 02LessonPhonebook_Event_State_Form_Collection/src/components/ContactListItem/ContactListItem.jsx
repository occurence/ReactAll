export const ContactListItem = ({ contact, deleteContact }) => {
    const handleDelete = () => {
        deleteContact(contact.id);
    }
    return(
        <li>
            {contact.name}: {contact.number}
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}