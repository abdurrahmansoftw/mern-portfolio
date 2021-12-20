import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Project = ({ project }) => {
  return (
    <Link to={`details/${project._id}`}>
      <Card className='shadow-sm border-0 h-100'>
        <Card.Img variant='top' src={project.image} fluid='true' alt={project.name} />
        <Card.Body>
          <Card.Title as='h4' className='fw-bold border-info'>
            {project.name}
          </Card.Title>
          <Card.Text className='text-muted'>
            <strong>{project.type}</strong>: {project.category}
          </Card.Text>

          <Card.Text className='border-info text-muted'>
            <strong>Features:</strong> {project.features}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default Project
