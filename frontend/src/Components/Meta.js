import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To My Portfolio- Abdur Rahman',
  description:
    'I m a passionate MERN Stack Developer. I develop web applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript',
  keywords: 'MERN Stack Developer, develop web applications, Frontend Developer',
}

export default Meta
