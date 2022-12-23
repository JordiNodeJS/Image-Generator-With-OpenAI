const { Router} = require('express')
const { generateImageAI } = require('../controlloler/generateImageAI')
const router = Router()

router.post('/imageGenerator', generateImageAI )

module.exports = router;
