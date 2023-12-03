import emailjs from 'emailjs-com'
import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_zq85vda', 'template_z3gwlmg', e.target, 'user_zfwgKHY5nreQACZ2hRWRk').then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
      },
      function (error) {
        console.log('FAILED...', error)
      }
    )
  }
  return (
    <Row>
      <Col xs={12} lg={6}>
        <Card.Header as='h3' className='text-center border-0 my-3 fw-bold'>
          <i className='far fa-envelope'></i> Contact With Me
        </Card.Header>
        <Card>
          <Card.Body>
            <Row>
              <Col md={2}>
                <h3>
                  <i className='fas fa-phone-volume'></i>
                </h3>
              </Col>
              <Col md={10}>
                <h5 className='fw-bold '> Phone Number </h5>
                <p>01722071791</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Row>
              <Col md={2}>
                <h3>
                  <i className='fas fa-envelope'></i>
                </h3>
              </Col>
              <Col md={10}>
                <h5 className='fw-bold '> Email Me </h5>

                <a href={`mailto:akaid.dev@gmail.com`} className='text-info fw-bold'>
                  akaid.dev@gmail.com
                </a>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Row>
              <Col md={2}>
                <h3>
                  <i className='fas fa-map-marker-alt'></i>
                </h3>
              </Col>
              <Col md={10}>
                <h5 className='fw-bold '> Permanent Address </h5>
                <p>COLLEGEPARA, DEBIGANJ, PANCHAGARH RANGPUR - Panchagarh</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Row>
              <Col md={2}>
                <h3>
                  <i class='fas fa-street-view'></i>
                </h3>
              </Col>
              <Col md={10}>
                <h5 className='fw-bold '> Present Address </h5>
                <p>Mirpur Dhaka</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} lg={6}>
        <Card className='shadow-sm border-0 h-100'>
          <Card.Header as='h3' className='text-center border-0 my-3 fw-bold'>
            <i className='far fa-envelope'></i> Get In Touch
          </Card.Header>
          <Card.Body>
            <Form onSubmit={submitHandler} autoComplete='off'>
              <Form.Group as={Row} className='mb-3' controlId='Name'>
                <Form.Label column sm='3'>
                  Name
                </Form.Label>
                <Col sm='9'>
                  <Form.Control type='text' name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className='mb-3' controlId='Email'>
                <Form.Label column sm='3'>
                  Email
                </Form.Label>
                <Col sm='9'>
                  <Form.Control type='email' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className='mb-3' controlId='Message'>
                <Form.Label column sm='3'>
                  Message
                </Form.Label>
                <Col sm='9'>
                  <Form.Control
                    as='textarea'
                    rows={4}
                    name='message'
                    value={message}
                    placeholder='Descript'
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className='mb-3'>
                <Col sm={{ span: 9, offset: 3 }}>
                  <Button type='submit' variant='outline-dark' className='col-12 '>
                    Send
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <a href='https://github.com/ARakaid' target='_blank' rel='noreferrer' className='btn   btn-outline-dark'>
              <i className='fab fa-github'></i> github
            </a>
            <a href='https://www.linkedin.com/in/akaid/' target='_blank' rel='noreferrer' className='btn m-2  btn-outline-dark'>
              <i className='fab fa-linkedin'></i> Linked in
            </a>
            <a href='https://www.facebook.com/Abdur.rahman.akaid/' target='_blank' rel='noreferrer' className='btn btn-outline-dark'>
              <i className='fab fa-facebook-square'></i> Facebook
            </a>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  )
}

export default Contact
