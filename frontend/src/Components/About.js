import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Introductions from '../Data/Introductions'

const About = () => {
  return (
    <>
      {Introductions.map((Introduction) => (
        <Card key={Introduction._id} className='border-0'>
          <Card.Body>
            <Card.Title className='border-0 fw-bold'>
              <i className='fas fa-user-tie'></i> Introduction
            </Card.Title>

            <Card.Title as='h2' className='display-4 fw-bold text-danger'>
              {Introduction.name}
            </Card.Title>
            <Card.Text as='h5' className='text-danger fw-bold'>
              {Introduction.designation}
            </Card.Text>
            <Card.Text as='h5' className='mt-5 fw-bold'>
              About me
            </Card.Text>
            <Card.Text>{Introduction.summary}</Card.Text>

            <a
              href='https://drive.google.com/file/d/1c0Ygbrhmxg5JrqhWyIuNV-R0T6CZIR8n/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
              className='btn btn-danger'
            >
              <i className='fas fa-download'></i> Resume
            </a>
            <Link to='/Contact' className='btn btn-danger m-1'>
              <i className='far fa-id-badge'></i> Contact
            </Link>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default About
