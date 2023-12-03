import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import Meta from '../Components/Meta'
import Rating from '../Components/Rating'
import { createProjectReview, listProjectDetails } from '../Redux/Actions/projectActions'

const Details = () => {
  const { id } = useParams()

  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  const projectDetails = useSelector((state) => state.projectDetails)
  const { loading, error, project } = projectDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const projectReviewCreate = useSelector((state) => state.projectReviewCreate)
  const { success: successProjectReview, loading: loadingProjectReview, error: errorProjectReview } = projectReviewCreate

  useEffect(() => {
    dispatch(listProjectDetails(id))
  }, [dispatch, id, successProjectReview])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createProjectReview(id, { rating, comment }))
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Meta title={project.name} />

          <Row>
            <Col xs={12} sm={6} md={8} lg={8} xl={8}>
              <Image src={project.image} thumbnail />

              <Card className='shadow-sm border-0 my-5'>
                <ListGroupItem className='border-0'>
                  <h4 className='fw-bold'>
                    Description
                  </h4>

                  {project.description}
                </ListGroupItem>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4} xl={4}>
              <div className='d-grid gap-2'>
                <a target='_blank' rel='noreferrer' href={project.source} className='btn btn-outline-dark shadow-sm col-12'>
                  <i className='fas fa-code'></i> Source Code
                </a>
                <a target='_blank' rel='noreferrer' href={project.live} className='btn btn-outline-dark shadow-sm col-12'>
                  <i className='fas fa-eye'></i> Live Preview
                </a>
              </div>

              <ListGroup variant='flush' className='shadow-sm my-3'>
                <ListGroupItem>
                  <i className='fas fa-check text-info'></i> <strong>Name:</strong> {project.name}
                </ListGroupItem>

                <ListGroupItem>
                  <i className='fas fa-check text-info'></i> <strong>Project Type: </strong> {project.type}
                </ListGroupItem>

                <ListGroupItem>
                  <i className='fas fa-check text-info'></i> <strong>Category: </strong> {project.category}
                </ListGroupItem>

                <ListGroupItem>
                  <i className='fas fa-check text-info'></i> <strong>Features: </strong> {project.features}
                </ListGroupItem>

                <ListGroupItem>
                  <i className='fas fa-check text-info'></i> <strong>Support: </strong> {project.supported}
                </ListGroupItem>

                <ListGroupItem>
                  <Rating value={project.rating} text={` ${project.numReviews} Reviews`} />
                </ListGroupItem>
              </ListGroup>

              <Link to='/Contact' className='btn btn-dark shadow-sm col-12'>
                <i className='far fa-id-badge'></i> Contact
              </Link>
            </Col>
          </Row>

          <Card className='shadow-sm'>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h2 className='fw-bold'>
                    <i className='fas fa-comments'></i> Reviews
                    <hr className='w-50 bg-info rounded-3' />
                  </h2>
                  {project.reviews.length === 0 && <Message>No Reviews</Message>}
                  <ListGroup variant='flush'>
                    {project.reviews.map((review) => (
                      <ListGroup.Item key={review._id}>
                        <strong>{review.name}</strong>
                        <Rating value={review.rating} />
                        <p>{review.createdAt.substring(0, 10)}</p>
                        <p>{review.comment}</p>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>

                <Col md={6}>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <h2 className='fw-bold'>
                        <i className='fas fa-pen-alt'></i> Write a Review
                        <hr className='w-50 bg-info rounded-3' />
                      </h2>

                      {successProjectReview && <Message variant='success'>Review submitted successfully</Message>}
                      {loadingProjectReview && <Loader />}
                      {errorProjectReview && <Message variant='danger'>{errorProjectReview}</Message>}
                      {userInfo ? (
                        <Form onSubmit={submitHandler}>
                          <Form.Group as={Row} className='mb-3' controlId='Rating'>
                            <Form.Label column sm='3'>
                              Rating
                            </Form.Label>
                            <Col sm='9'>
                              <Form.Control as='select' value={rating} onChange={(e) => setRating(e.target.value)}>
                                <option value=''>Select...</option>
                                <option value='1'>1 - Poor</option>
                                <option value='2'>2 - Fair</option>
                                <option value='3'>3 - Good</option>
                                <option value='4'>4 - Very Good</option>
                                <option value='5'>5 - Excellent</option>
                              </Form.Control>
                            </Col>
                          </Form.Group>

                          <Form.Group as={Row} className='mb-3' controlId='comment'>
                            <Form.Label column sm='3'>
                              Comment
                            </Form.Label>
                            <Col sm='9'>
                              <Form.Control as='textarea' rows={3} value={comment} onChange={(e) => setComment(e.target.value)} />
                            </Col>
                          </Form.Group>

                          <Form.Group as={Row} className='mb-3'>
                            <Col sm={{ span: 9, offset: 3 }}>
                              <Button disabled={loadingProjectReview} type='submit' variant='outline-dark' className='col-12'>
                                Submit
                              </Button>
                            </Col>
                          </Form.Group>
                        </Form>
                      ) : (
                        <Message>
                          Please <Link to='/login'>sign in</Link> to write a review{' '}
                        </Message>
                      )}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  )
}

export default Details
