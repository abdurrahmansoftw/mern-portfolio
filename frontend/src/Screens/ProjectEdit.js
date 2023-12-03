import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import FormContainer from '../Components/FormContainer'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import { listProjectDetails, updateProject } from '../Redux/Actions/projectActions'
import { PROJECT_UPDATE_RESET } from '../Redux/Constants/projectConstants'

const ProjectEdit = () => {
  const params = useParams()

  const navigate = useNavigate()

  const projectId = params.id

  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [image, setImage] = useState('')
  const [features, setFeatures] = useState('')
  const [category, setCategory] = useState('')
  const [live, setLive] = useState('')
  const [source, setSource] = useState('')
  const [supported, setSupported] = useState('')
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const projectDetails = useSelector((state) => state.projectDetails)
  const { loading, error, project } = projectDetails

  const projectUpdate = useSelector((state) => state.projectUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = projectUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PROJECT_UPDATE_RESET })
      navigate('/admin/ProjectList')
    } else {
      if (!project.name || project._id !== projectId) {
        dispatch(listProjectDetails(projectId))
      } else {
        setName(project.name)
        setType(project.type)
        setImage(project.image)
        setFeatures(project.features)
        setLive(project.live)
        setSource(project.source)
        setCategory(project.category)
        setSupported(project.supported)
        setDescription(project.description)
      }
    }
  }, [dispatch, navigate, projectId, project, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } }
      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateProject({ _id: projectId, name, type, image, live, source, features, category, description, supported }))
  }

  return (
    <FormContainer>
      <h1 className='fw-bold text-center my-4'>
        <i className='fas fa-edit'></i> Project Updates
      </h1>

      {loadingUpdate && <Loader />}
      {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Form onSubmit={submitHandler}>
          <Form.Group as={Row} className='mb-3' controlId='Name'>
            <Form.Label column sm='3'>
              Name
            </Form.Label>
            <Col sm='9'>
              <Form.Control type='text' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='image'>
            <Form.Label column sm='3'>
              Image
            </Form.Label>
            <Col sm='9'>
              <Form.Control type='text' value={image} onChange={(e) => setImage(e.target.value)} />
              <Form.Control type='file' label='Choose File' custom onChange={uploadFileHandler} />
            </Col>
            {uploading && <Loader />}
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='Type'>
            <Form.Label column sm='3'>
              Type
            </Form.Label>
            <Col sm='9'>
              <Form.Control type='text' placeholder='Type' value={type} onChange={(e) => setType(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='Live'>
            <Form.Label column sm='3'>
              Live Link
            </Form.Label>
            <Col sm='9'>
              <Form.Control type='url' value={live} onChange={(e) => setLive(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='Source'>
            <Form.Label column sm='3'>
              Source Link
            </Form.Label>
            <Col sm='9'>
              <Form.Control type='url' value={source} onChange={(e) => setSource(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='Category'>
            <Form.Label column sm='3'>
              Category
            </Form.Label>
            <Col sm='9'>
              <Form.Control type='text' placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='Features'>
            <Form.Label column sm='3'>
              Features
            </Form.Label>
            <Col sm='9'>
              <Form.Control as='textarea' rows={2} value={features} onChange={(e) => setFeatures(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='Supported'>
            <Form.Label column sm='3'>
              Supported
            </Form.Label>
            <Col sm='9'>
              <Form.Control as='textarea' rows={3} value={supported} onChange={(e) => setSupported(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='supported'>
            <Form.Label column sm='3'>
              Description
            </Form.Label>
            <Col sm='9'>
              <Form.Control as='textarea' rows={5} value={description} onChange={(e) => setDescription(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3'>
            <Col sm={{ span: 9, offset: 3 }}>
              <Button type='submit' variant='outline-dark' className='col-12'>
                Updated
              </Button>
            </Col>
          </Form.Group>
        </Form>
      )}
    </FormContainer>
  )
}

export default ProjectEdit
