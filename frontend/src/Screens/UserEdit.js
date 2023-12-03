import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import FormContainer from '../Components/FormContainer'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import { getUserDetails, updateUser } from '../Redux/Actions/userActions'
import { USER_UPDATE_RESET } from '../Redux/Constants/userConstants'

const UserEdit = () => {
  const params = useParams()

  const navigate = useNavigate()

  const userId = params.id

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdate = useSelector((state) => state.userUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = userUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET })
      navigate('/admin/userlist')
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }
  }, [dispatch, navigate, userId, user, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUser({ _id: userId, name, email, isAdmin }))
  }

  return (
    <FormContainer>
      <h1 className='fw-bold text-center my-4'>
        <i className='fas fa-edit'></i> User Updates
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

          <Form.Group as={Row} className='mb-3' controlId='Email'>
            <Form.Label column sm='3'>
              Email
            </Form.Label>
            <Col sm='9'>
              <Form.Control type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='isadmin'>
            <Form.Label column sm='3'>
              Is Admin
            </Form.Label>
            <Col sm='9'>
              <Form.Check type='checkbox' label='Is Admin' checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
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

export default UserEdit
