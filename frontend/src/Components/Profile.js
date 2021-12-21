import React from 'react'
import { Card, Image } from 'react-bootstrap'
import MyProfile from '../Data/MyProfile'

const Profile = () => {
  return (
    <>
      {MyProfile.map((mp) => (
        <Card className=' card-profile' key={mp._id}>
          <Image variant='top' src={mp.image} fluid='true' alt={mp._id} rounded className='img' />

          <Card.Body>
            <a href={mp.github} target='_blank' rel='noreferrer' className='btn  btn-outline-dark col-12'>
              <i className='fab fa-github'></i> github
            </a>
            <a href={mp.linkedin} target='_blank' rel='noreferrer' className='btn my-2  btn-outline-dark col-12'>
              <i className='fab fa-linkedin'></i> Linked in
            </a>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default Profile
