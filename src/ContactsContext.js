import axios from 'axios';
import React, { createContext, useState } from 'react';

export const contactsContext = createContext();

const ContactsContextProvider = ({ children }) => {
  const API = 'http://localhost:8000/contacts';

  const [contacts, setContacts] = useState([]);
  const [oneContactInfo, setOneContactInfo] = useState(null);

  //! add
  async function addContact(newContact) {
    await axios.post(API, newContact);
  }

  //! read

  async function getContacts() {
    let res = await axios.get(API);
    setContacts(res.data);
  }

  //! delete

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  //! get one contact info
  async function getOneContactInfo(id) {
    let result = await axios.get(`${API}/${id}`);
    setOneContactInfo(result.data);
  }

  // ! update
  async function updateContactInfo(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
    getContacts();
  }
  return (
    <contactsContext.Provider
      value={{
        addContact,
        oneContactInfo,
        getOneContactInfo,
        deleteContact,
        getContacts,
        contacts,
        updateContactInfo,
      }}
    >
      {children}
    </contactsContext.Provider>
  );
};

export default ContactsContextProvider;
