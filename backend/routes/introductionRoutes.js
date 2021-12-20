import express from 'express'
const router = express.Router()

router.get('/api/introduction', (req, res) => {
  res.json(Introductions)
})

export default router
