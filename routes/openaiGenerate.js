const { Router } = require('express')
const { generateImageAI } = require('../controller')
const router = Router()

router.post('/awesomeImageGenerateByOpenAI', generateImageAI )

module.exports = router
