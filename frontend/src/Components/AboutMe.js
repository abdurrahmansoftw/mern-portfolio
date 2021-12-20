import React from 'react'
import { Col, Row } from 'react-bootstrap'
import About from './About'
import Profile from './Profile'

const AboutMe = () => {
  return (
    <Row className='d-flex align-items-center'>
      <Col xs={12} sm={12} md={6} lg={8} xl={8}>
        <About />
      </Col>
      <Col xs={12} sm={12} md={6} lg={4} xl={4}>
        <Profile />
      </Col>
    </Row>
  )
}

export default AboutMe
