import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PricingItems from '../Components/PricingItems'
import pricings from '../Data/pricings'

const Pricing = () => {
  return (
    <div className='my-5'>
      <h2 className='fw-bold text-center my-3'>
        <i className='fas fa-tasks'></i> Pricing
      </h2>

      <Row className='gx-2 justify-content-center align-items-center'>
        {pricings.map((pricing) => (
          <Col xs={12} sm={6} md={4} lg={3} xl={3} className='fw-bold mb-5' key={pricing._id}>
            <PricingItems pricing={pricing} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Pricing
