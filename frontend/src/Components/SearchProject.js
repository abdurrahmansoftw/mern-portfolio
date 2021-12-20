import React, { useState } from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchProject = () => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate(-1)
    }
  }

  return (
    <Row>
      <Form onSubmit={submitHandler} autoComplete='off'>
        <Row>
          <Col sm={12}>
            <Form.Label htmlFor='searchProject' visuallyHidden>
              Search Project
            </Form.Label>
            <InputGroup>
              <Form.Control type='text' name='q' onChange={(e) => setKeyword(e.target.value)} placeholder='Enter Project Name. . .' />
              <InputGroup.Text>
                <i className='fas fa-search'></i>
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Form>
    </Row>
  )
}

export default SearchProject
