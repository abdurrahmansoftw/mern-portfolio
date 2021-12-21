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
        <div
          className='colored-shadow'
          style={{
            backgroundImage: 'url("https://zsuttonphoto.com/wp-content/uploads/2014/02/Albuquerque-Portrait-Photography-11.jpg")',
            opacity: 1,
          }}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>{project.client}</Card.Title>
        <h6 className='card-category fw-bold text-gray'>{project.type}</h6>
      </Card.Body>

      <Card.Footer className='d-flex justify-content-between align-items-center '>
        <Link to={`/details/${project._id}`} className='btn  fw-bold '>
          Explore <i className='fas fa-angle-right'></i>
        </Link>

        <small>
          <Rating value={project.rating} text={` ${project.numReviews} Reviews`} />
        </small>
      </Card.Footer>
    </Card>
  )
}

export default Project
