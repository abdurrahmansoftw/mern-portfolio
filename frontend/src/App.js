import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFopund from './Common/404'
import Footer from './Common/Footer'
import Header from './Common/Header'
import Contact from './Screens/Contact'
import Details from './Screens/Details'
import Home from './Screens/Home'
import Login from './Screens/Login'
import ProjectEdit from './Screens/ProjectEdit'
import ProjectList from './Screens/ProjectList'
import Projects from './Screens/Projects'
import Registration from './Screens/Registration'
import UserEdit from './Screens/UserEdit'
import UserList from './Screens/UserList'
import UserProfile from './Screens/UserProfile'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container className='my-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />

          <Route path='/search/:keyword' element={<Projects />} />
          <Route path='/page/:pageNumber' element={<Projects />} />
          <Route path='/search/:keyword/page/:pageNumber' element={<Projects />} />
          <Route path='/search/details/:id' element={<Details />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/projects/details/:id' element={<Details />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/userProfile' element={<UserProfile />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/admin/userList' element={<UserList />} />
          <Route path='/admin/user/:id/Edit' element={<UserEdit />} />
          <Route path='/admin/projectList' element={<ProjectList />} />
          <Route path='/admin/projectList/:pageNumber' element={<ProjectList />} />
          <Route path='/admin/project/:id/Edit' element={<ProjectEdit />} />
          <Route path='*' element={<NotFopund />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
