import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import Meta from '../Components/Meta'
import Paginate from '../Components/Paginate'
import Project from '../Components/Project'
import SearchProject from '../Components/SearchProject'
import { listProjects } from '../Redux/Actions/projectActions'

const Projects = () => {
  const params = useParams()

  const keyword = params.keyword

  const pageNumber = params.pageNumber || 1

  const dispatch = useDispatch()

  const projectList = useSelector((state) => state.projectList)
  const { loading, error, projects, page, pages } = projectList

  useEffect(() => {
    dispatch(listProjects(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />

      <Row className='align-items-center'>
        <Col>
          <h2 className='fw-bold'>
            <i className='fab fa-staylinked'></i> All Project
          </h2>
        </Col>
        <Col className='text-right'>
          <SearchProject />
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
              <Col xs={12} sm={12} md={6} lg={6} xl={4} key={project._id} className='my-3'>
                <Project project={project} />
              </Col>
            ))}
          </Row>

          <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
        </>
      )}
    </>
  )
}

export default Projects
