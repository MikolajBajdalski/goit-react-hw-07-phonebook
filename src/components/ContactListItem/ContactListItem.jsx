import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './ContactListItem.module.css';
import { deleteContact } from 'store/contactsSlice';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.listItem}>
      {contact.name}: {contact.number}
      <button onClick={handleDeleteContact}>Delete</button>
    </li>
  );
};

export default ContactListItem;
