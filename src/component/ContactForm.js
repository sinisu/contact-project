import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [name,setName] = useState('');
  const [number,setNumber] = useState(0);
  const dispatch = useDispatch();
  const [display,setDisplay] = useState('none')

  const addContact = (event) => {
    event.preventDefault();
    if (name != "" && number != 0) {
      dispatch({type:"ADD_CONTACT", payload:{name,number}})
      event.target.reset();
      setDisplay('none')
      setName('');
      setNumber(0);
    } else {
      setDisplay('block')
    }
  }

  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-4" controlId="formName">
        <Form.Label>NAME</Form.Label>
        <Form.Control
          type="text"
          placeholder="What is your name?"
          onChange={(event)=>setName(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formNumber">
        <Form.Label>PHONE NUMBER</Form.Label>
        <Form.Control
          type="number"
          placeholder="What is your number?"
          onChange={(event)=>setNumber(event.target.value)}
        />
      </Form.Group>

      <div className="text-red" style={{display:display}}>
        * Fill in the all blanks.
      </div>

      <Button variant="primary" type="submit" className='save-btn'>
        SAVE
      </Button>
    </Form>
  )
}

export default ContactForm
