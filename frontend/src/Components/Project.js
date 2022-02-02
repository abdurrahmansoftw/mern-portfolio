import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../Components/Rating'

const Project = ({ project }) => {
  return (
    <Card className='customCard card-profile'>
      <Link to={`/details/${project._id}`}>
        <Image fluid className='img' src={project.image} alt={project.category} title={project.category} />
      </Link>

      <Card.Body>
        <Card.Title as='h5' className='fw-bold text-muted'>
          {project.name}
        </Card.Title>
        <Card.Text className='text-muted'> {project.features}</Card.Text>
      </Card.Body>

      <Card.Footer className='d-flex justify-content-between align-items-center text-muted'>
        <Link to={`/details/${project._id}`} className='btn fw-bold btn-sm text-muted'>
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
