import React, { useEffect } from 'react'
import { Button, Col, Image, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import Paginate from '../Components/Paginate'
import { createProject, deleteProject, listProjects } from '../Redux/Actions/projectActions'
import { PROJECT_CREATE_RESET } from '../Redux/Constants/projectConstants'

const ProjectList = () => {
  const params = useParams()

  const navigate = useNavigate()

  const pageNumber = params.pageNumber || 1

  const dispatch = useDispatch()

  const projectList = useSelector((state) => state.projectList)
  const { loading, error, projects, pages, page } = projectList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const projectDelete = useSelector((state) => state.projectDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = projectDelete

  const projectCreate = useSelector((state) => state.projectCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, project: createdProject } = projectCreate

  useEffect(() => {
    dispatch({ type: PROJECT_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/project/${createdProject._id}/edit`)
    } else {
      dispatch(listProjects('', pageNumber))
    }
  }, [dispatch, userInfo, navigate, successDelete, successCreate, createdProject, pageNumber])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteProject(id))
    }
  }

  const createProjectHandler = () => {
    dispatch(createProject())
  }

  return (
    <>
      <Row className='align-items-center my-4'>
        <Col>
          <h1 className='fw-bold my-4'>
            <i className='fas fa-briefcase'></i> Project List
          
          </h1>
        </Col>
        <Col className='text-right'>
          <Button variant='dark' className='col-12 my-3' onClick={createProjectHandler}>
            <i className='fas fa-plus'></i> Create a New Project
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover variant='info' responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>TYPE</th>
                <th>CATEGORY</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project._id}>
                  <td>{project._id}</td>
                  <td>
                    <Image src={project.image} alt={project.name} rounded width='80' height='40' />
                  </td>
                  <td>{project.name}</td>
                  <td>{project.type}</td>
                  <td>{project.category}</td>

                  <td>
                    <Link to={`/admin/project/${project._id}/edit`}>
                      <Button variant='dark' className='btn-sm col-5'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </Link>{' '}
                    <Button variant='outline-danger' className='btn-sm col-5' onClick={() => deleteHandler(project._id)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Paginate pages={pages} page={page} />
        </>
      )}
    </>
  )
}

export default ProjectList
