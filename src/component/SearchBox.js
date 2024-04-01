import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const SearchBox = () => {
  const [searchKey,setSearchKey] = useState();
  let dispatch = useDispatch();
  const getSearchKey = (event) => {
    event.preventDefault();
    dispatch({type:"SEARCH",payload:{searchKey}})
    event.target.reset();
  }

  return (
    <Row>
      <Form.Label>SEARCH</Form.Label>
      <Form className='search-box' onSubmit={getSearchKey}>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Search name" onChange={(event)=>setSearchKey(event.target.value)}/>
        </Col>
        <Col sm={2}>
          <Button type="submit" className='search-btn'>FIND</Button>
        </Col>
      </Form>
      
    </Row>
  )
}

export default SearchBox
