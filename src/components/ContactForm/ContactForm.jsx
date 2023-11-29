import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ContactForm.module.css';
import { addContact } from 'store/contactsAPI';

function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          className={styles.input}
          required
        />
      </label>
      <label className={styles.label}>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          className={styles.input}
          required
        />
      </label>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
