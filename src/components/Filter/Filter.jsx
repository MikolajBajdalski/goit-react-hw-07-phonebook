import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { setFilter } from 'store/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filter}>
      <p className={styles.test}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

export default Filter;
