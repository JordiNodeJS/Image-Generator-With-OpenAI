const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000

const app = express()

app.use('/openai', require('./routes/openaiGenerate'))

app.listen(port, () => console.log(`Server start on port ${port}`))
