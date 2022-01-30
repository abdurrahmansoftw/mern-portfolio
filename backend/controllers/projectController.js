import express from 'express'
import asyncHandler from 'express-async-handler'
import Project from '../models/projectModel.js'
const router = express.Router()

// @desc    Fetch all Projects
// @route   GET /api/Projects
// @access  Public

const getProjects = asyncHandler(async (req, res) => {
  const pageSize = 12
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword ? { name: { $regex: req.query.keyword, $options: 'i' } } : {}

  const count = await Project.countDocuments({ ...keyword })
  const projects = await Project.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ projects, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single Project
// @route   GET /api/Project/:id
// @access  Public

const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id)

  if (project) {
    res.json(project)
  } else {
    res.status(404)
    throw new Error('Project not found')
  }
})

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private/Admin

const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id)

  if (project) {
    await project.remove()
    res.json({ message: 'Project removed' })
  } else {
    res.status(404)
    throw new Error('Project not found')
  }
})

// @desc    Create a project
// @route   POST /api/projects
// @access  Private/Admin

const createProject = asyncHandler(async (req, res) => {
  const project = new Project({
    name: 'Sample name',
    type: 'MERN-Stack',
    user: req.user._id,
    image: '/image/booking.png',
    features: 'Javascript, React, Nodejs, Express, Mongoose, Frontend, Mernstack,',
    category: 'Portfolio',
    live: 'https://booking-mernstack.herokuapp.com',
    source: 'https://github.com/abdurrahmanakaid',
    supported: '1 year of free updates 6 months technical support, 100% money-back guarantee* , Supports the development of Abdur Rahman',
    numReviews: 0,
    description: 'Sample description',
  })

  const createdProject = await project.save()
  res.status(201).json(createdProject)
})

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private/Admin

const updateProject = asyncHandler(async (req, res) => {
  const { name, type, description, image, features, live, source, category, supported } = req.body

  const project = await Project.findById(req.params.id)

  if (project) {
    project.name = name
    project.type = type
    project.image = image
    project.features = features
    project.live = live
    project.source = source
    project.category = category
    project.supported = supported
    project.description = description

    const updatedProject = await project.save()
    res.json(updatedProject)
  } else {
    res.status(404)
    throw new Error('Project not found')
  }
})

// @desc    Create new review
// @route   POST /api/projects/:id/reviews
// @access  Private

const createProjectReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body
  const project = await Project.findById(req.params.id)

  if (project) {
    const alreadyReviewed = project.reviews.find((r) => r.user.toString() === req.user._id.toString())
    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Project already reviewed')
    }
    const review = { name: req.user.name, rating: Number(rating), comment, user: req.user._id }
    project.reviews.push(review)
    project.numReviews = project.reviews.length
    project.rating = project.reviews.reduce((acc, item) => item.rating + acc, 0) / project.reviews.length
    await project.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Project not found')
  }
})

// @desc    Get top rated projects
// @route   GET /api/projects/top
// @access  Public

const getTopProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({}).sort({ rating: -1 }).limit(8)
  res.json(projects)
})

export { getProjects, getProjectById, deleteProject, createProject, updateProject, createProjectReview, getTopProjects }
