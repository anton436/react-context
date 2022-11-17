import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { contactsContext } from '../../ContactsContext';

function ContactCard({ name, lastName, phone, id }) {
  const { deleteContact } = useContext(contactsContext);
  const navigate = useNavigate();
  return (
    <Card
      style={{
        width: '18rem',
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Card.Body>
        <Card.Title>Name: {name} </Card.Title>
        <Card.Title>last Name: {lastName} </Card.Title>
        <Button variant='warning'>{phone}</Button>
        <Card.Body>
          <Button
            onClick={() => deleteContact(id)}
            className='mx-2'
            variant='danger'
          >
            Delete
          </Button>
          <Button
            onClick={() => navigate(`/edit/${id}`)}
            className='mx-2'
            variant='success'
          >
            Edit
          </Button>
        </Card.Body>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
