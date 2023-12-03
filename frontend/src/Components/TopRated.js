import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import Meta from '../Components/Meta'
import Project from '../Components/Project'
import { listTopProjects } from '../Redux/Actions/projectActions'

const TopRated = () => {
  const dispatch = useDispatch()

  const projectTopRated = useSelector((state) => state.projectTopRated)
  const { loading, error, projects } = projectTopRated

  useEffect(() => {
    dispatch(listTopProjects())
  }, [dispatch])

  return (
    <div className='my-5'>
      <Meta />

      <Row className='align-items-center mt-4'>
        <Col>
          <h2 className='fw-bold'>
            <i className='fab fa-staylinked'></i> My Project
          </h2>
        </Col>
        <Col className='d-md-flex justify-content-md-end'>
          <Link to='/projects' className='btn btn-danger'>
            <i className='far fa-gem'></i> All Project
          </Link>
        </Col>
      </Row>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {projects.map((project) => (
              <Col xs={12} sm={6} md={6} lg={4} xl={3} key={project._id} className='my-3'>
                <Project project={project} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  )
}

export default TopRated
