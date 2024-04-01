import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const ContactItem = ({item}) => {
  const dispatch = useDispatch();

  const getDelete = (event) => {
    let deleteName = event.target.parentElement.parentElement.children[1].firstChild.innerText;
    let deleteNumber = event.target.parentElement.parentElement.children[1].lastChild.innerHTML;
    dispatch({type:"DELETENAME", payload:{deleteName}})
    dispatch({type:"DELETENUMBER", payload:{deleteNumber}})
    // console.dir(event.target.parentNode.parentElement.childNodes[1].childNodes[0].childNodes[0].textContent)
  }

  return (
    <Row className='item-box'>
      <Col sm={2}>
        <img 
            width={50}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fqN_CJu_jsKqUf1Ww4UzzciqztpE373mfg2cqM9V6Q&s'
        />
      </Col>
      <Col sm={8} className='info-box'>
        <div>{item.name}</div>
        <div>{item.number}</div>
      </Col>
      <Col sm={2} className='delete-btn'>
        <Button onClick={getDelete}>-</Button>
      </Col>
    </Row>
  )
}

export default ContactItem
