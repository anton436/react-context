import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { contactsContext } from '../../ContactsContext';

const EditContact = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const params = useParams();
  const navigate = useNavigate();
  const { getOneContactInfo, updateContactInfo, oneContactInfo } =
    useContext(contactsContext);

  useEffect(() => {
    getOneContactInfo(params.id);
  }, []);

  useEffect(() => {
    if (oneContactInfo) {
      setName(oneContactInfo.name);
      setLastName(oneContactInfo.lastName);
      setPhone(oneContactInfo.phone);
    }
  }, [oneContactInfo]);

  const handleValues = () => {
    const editedContact = {
      name,
      lastName,
      phone,
    };

    if (!name.trim() || !lastName.trim() || !phone.trim()) {
      alert('заполните поля');
      return;
    }

    updateContactInfo(params.id, editedContact);

    setName('');
    setLastName('');
    setPhone('');
  };

  return (
    <div className='d-flex flex-column mt-5 align-items-center'>
      <h1>EDIT CONTACT</h1>
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
      <Button
        onClick={() => {
          handleValues();
          navigate('/');
        }}
        variant='dark'
        className='w-50'
      >
        SAVE CHANGES
      </Button>
    </div>
  );
};

export default EditContact;
