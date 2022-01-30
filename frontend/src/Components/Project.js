import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../Components/Rating'

const Project = ({ project }) => {
  return (
    <Card className='customCard card-profile'>
      <Card.Header className='card-header-image'>
        <Link to={`/details/${project._id}`}>
          <Image fluid className='img' src={project.image} alt={project.category} title={project.category} />
        </Link>
      </Card.Header>
      <Card.Body>
        <Card.Title className='card-category fw-bold text-gray'>{project.type}</Card.Title>
        <Card.Text as='h6'> {project.features}</Card.Text>
      </Card.Body>

      <Card.Footer className='d-flex justify-content-between align-items-center text-light bg-dark'>
        <Link to={`/details/${project._id}`} className='btn fw-bold text-light'>
          Explore <i className='fas fa-angle-right'></i>
        </Link>

        <small>
          <Rating value={project.rating} text={` ${project.numReviews} `} />
        </small>
      </Card.Footer>
    </Card>
  )
}

export default Project
