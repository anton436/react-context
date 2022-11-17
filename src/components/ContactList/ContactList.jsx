import React, { useContext, useEffect } from 'react';
import { contactsContext } from '../../ContactsContext';
import ContactCard from '../Card/ContactCard';

const ContactList = () => {
  const { getContacts, contacts } = useContext(contactsContext);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className='container d-flex flex-column align-items-center'>
      <h1>CONTACT BOOK</h1>
      <div className='d-flex flex-wrap justify-content-center'>
        {contacts.map((item) => (
          <ContactCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
