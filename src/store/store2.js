// src/slices/contactsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
        const name = action.payload.name;
        const prenom = action.payload.prenom;
        const numtel = action.payload.numtel;
      state.contacts.push(prenom,name,numtel);  
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);  // Suppression du contact par son id
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
