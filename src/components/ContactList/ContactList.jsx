import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import { deleteContact } from '../../store/contactsAPI';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = useMemo(() => {
    return Array.isArray(contacts) && filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  }, [contacts, filter]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={() => handleDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
