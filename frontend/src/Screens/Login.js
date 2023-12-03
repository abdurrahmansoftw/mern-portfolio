import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import FormContainer from '../Components/FormContainer'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import { login } from '../Redux/Actions/userActions'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <FormContainer>
      <h1 className='fw-bold text-center my-5'>
        <i className='fas fa-user-alt'></i> Login
      </h1>

      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler} autoComplete='off'>
        <Form.Group as={Row} className='mb-3' controlId='Email'>
          <Form.Label column sm='3'>
            Email
          </Form.Label>
          <Col sm='9'>
            <Form.Control type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3' controlId='Password'>
          <Form.Label column sm='3'>
            Password
          </Form.Label>
          <Col sm='9'>
            <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3'>
          <Col sm={{ span: 9, offset: 3 }}>
            <Button type='submit' variant='outline-dark' className='col-12'>
              Sign in
            </Button>
          </Col>
        </Form.Group>
      </Form>

      <Row className='py-3'>
        <Col>
          Create Account? <Link to={redirect ? `/registration?redirect=${redirect}` : '/Registration'}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default Login
