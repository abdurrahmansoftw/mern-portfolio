import express from 'express'
import {
  createProject,
  createProjectReview,
  deleteProject,
  getProjectById,
  getProjects,
  getTopProjects,
  updateProject,
} from '../controllers/projectController.js'
import { admin, protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').get(getProjects).post(protect, admin, createProject)
router.route('/:id/reviews').post(protect, createProjectReview)
router.get('/top', getTopProjects)
router.route('/:id').get(getProjectById).delete(protect, admin, deleteProject).put(protect, admin, updateProject)

export default router
