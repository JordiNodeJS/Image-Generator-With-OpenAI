const { Router } = require('express')
const router = Router()

router.post('/awesomeImageGenerateByOpenAI', (req, res) => {
  res.status(200).json({
    success: true
  })
})

module.exports = router
