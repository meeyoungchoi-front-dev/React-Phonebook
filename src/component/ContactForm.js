import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhonenumber] = useState('');
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    dispatch({type:"ADD_CONTACT" , payload: {name: name, phoneNumber: phoneNumber}}); // name, phonuNumber
  }

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이름</Form.Label>
            <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(event) => setName(event.target.value)}/>
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>전화번호</Form.Label>
            <Form.Control type="numver" placeholder="전화번호를 입력해주세요" onChange={(event) => setPhonenumber(event.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            추가
        </Button>
    </Form>
    </div>
  )
}

export default ContactForm
