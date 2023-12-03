import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../Redux/Actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <Navbar bg='dark' variant='dark' expand='sm'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <i className='fas fa-user-tie'></i> Abdur Rahman
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='controls' />
        <Navbar.Collapse id='controls'>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to='/projects'>
              <i className='fab fa-staylinked'></i> My Project
            </Nav.Link>

            <Nav.Link as={Link} to='/contact'>
              <i className='far fa-id-badge'></i> Contact
            </Nav.Link>
            {userInfo ? (
              <>
                <NavDropdown menuVariant='dark' title={userInfo.name} id='userName'>
                  <NavDropdown.Item as={Link} to='/userProfile'>
                    <i className='far fa-user-circle'></i> Your Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    <i className='fas fa-sign-out-alt'></i> Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link as={Link} to='/login'>
                <i className='fas fa-sign-in-alt'></i> Login
              </Nav.Link>
            )}

            {userInfo && userInfo.isAdmin && (
              <NavDropdown menuVariant='dark' title='Admin' id='adminMenu'>
                <NavDropdown.Item as={Link} to='/admin/userList'>
                  <i className='fas fa-user-cog'></i> Setting
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item as={Link} to='/admin/myInfoList'>
                  <i className='fas fa-database'></i> MyInfo
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to='/admin/projectList'>
                  <i className='fas fa-project-diagram'></i> Project
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>
                  <i className='fas fa-sign-out-alt'></i> Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
