import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://65678bce64fcff8d731090f3.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await axios.post(API_URL, contact);
    return response.data;
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, contact }) => {
    const response = await axios.put(`${API_URL}/${id}`, contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

const initialState = {
  contacts: [],
  status: 'idle',
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.status = 'loading';
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [addContact.fulfilled]: (state, action) => {
      state.contacts.push(action.payload);
    },
    [updateContact.fulfilled]: (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts[index] = action.payload;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const reducer = contactsSlice.reducer;
