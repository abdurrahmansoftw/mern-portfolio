import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='d-flex justify-content-center align-items-center my-5'>
        <Col xs={12} md={8} lg={7}>
          <Card className='shadow'>
            <Card.Body>{children}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
