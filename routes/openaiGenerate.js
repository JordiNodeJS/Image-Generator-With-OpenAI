const { Router } = require('express')
const { generateImageAI } = require('../controller')
const router = Router()

router.post('/imageGenerateByOpenAI', generateImageAI )

module.exports = router
