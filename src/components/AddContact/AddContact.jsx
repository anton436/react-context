import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { contactsContext } from '../../ContactsContext';

const AddContact = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const { addContact } = useContext(contactsContext);
  const handleValues = () => {
    const newContact = {
      name,
      lastName,
      phone,
    };

    if (!name.trim() || !lastName.trim() || !phone.trim()) {
      alert('заполните поля');
      return;
    }

    addContact(newContact);

    setName('');
    setLastName('');
    setPhone('');
  };

  return (
    <div className='d-flex flex-column mt-5 align-items-center'>
      <h1>ADD CONTACT</h1>
      <Form.Control
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder='name'
        className='mb-2 w-50'
      />
      <Form.Control
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        placeholder='lastName'
        className='mb-2 w-50'
      />
      <Form.Control
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        placeholder='phone'
        className='mb-2 w-50'
      />
      <Button onClick={handleValues} variant='dark' className='w-50'>
        ADD CONTACT
      </Button>
    </div>
  );
};

export default AddContact;
