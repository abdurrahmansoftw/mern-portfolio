import React from 'react'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PricingItems = ({ pricing }) => {
  return (
    <Card border='info' className={`${pricing.shadow} text-center`}>
      <Card.Header className='border-info fw-bold'>{pricing.title}</Card.Header>
      <Card.Body>
        <ListGroup variant='flush'>
          <ListGroupItem as='h4' key={pricing} className='fw-bold'>
            ${pricing.price}
          </ListGroupItem>

          {pricing.description.map((desc) => (
            <ListGroupItem key={desc}>
              <i className='fas fa-check text-info'></i> {desc}
            </ListGroupItem>
          ))}
        </ListGroup>
        <Link to='/contact'>
          <Button variant={pricing.buttonVariant} className='mt-3 col-12'>
            <i className='far fa-id-badge'></i> {pricing.buttonText}
          </Button>
        </Link>
      </Card.Body>
      <Card.Footer className='border-info'>
        Delivery {pricing.delivery} Day, {pricing.revision} Revisions
      </Card.Footer>
    </Card>
  )
}

export default PricingItems
