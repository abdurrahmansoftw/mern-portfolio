import React from 'react'
import { Card } from 'react-bootstrap'
const Footer = () => {
  return (
    <Card.Footer className='text-center bg-dark text-light py-3'>
      <i className='fas fa-heart'></i> Design & Development by <i className='fas fa-user-tie'></i> Abdur Rahman <i className='fab fa-envira'></i>
      All Rights Reserved. &copy;{new Date().getFullYear()}
    </Card.Footer>
  )
}

export default Footer
