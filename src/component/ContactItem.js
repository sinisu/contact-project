import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <Row className='item-box'>
      <Col sm={2}>
        <img 
            width={50}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fqN_CJu_jsKqUf1Ww4UzzciqztpE373mfg2cqM9V6Q&s'
        />
      </Col>
      <Col sm={10} className='info-box'>
        <div>{item.name}</div>
        <div>{item.number}</div>
      </Col>
    </Row>
  )
}

export default ContactItem
