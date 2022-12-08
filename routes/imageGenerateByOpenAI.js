const { Router } = require('express')
const { generateImageAI } = require('../controlloler/generateImageAI')
const router = Router()

router.post('/imageGenerateByOpenAI', generateImageAI )

module.exports = router
