import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { debounce } from 'lodash';
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage';

const preloadedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  preloadedState,
});

store.subscribe(
  debounce(() => {
    saveToLocalStorage({
      contacts: store.getState().contacts,
    });
  }, 500)
);

export default store;
