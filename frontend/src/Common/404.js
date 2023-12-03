import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFopund = ({ history }) => {
  useEffect(() => {
    setTimeout(() => {
      history.push('/')
    }, 3000)
  }, [history])

  return (
    <Container>
      <Row className='justify-content-center text-center'>
        <Col xs={12} md={6}>
          <Card className='p-4 shadow'>
            <h1 className='display-1 '>
              <i className='fas fa-bug'></i>
            </h1>
            <h2>404 Page Not Found</h2>
            <p>Oh snap! You got an error!</p>

            <Link to='/' className='btn btn-outline-light'>
              Go Back To Home
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFopund
