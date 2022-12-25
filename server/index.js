const express = require('express')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000

const app = express()

// Enable to accept body data
app.use(cors({
  origin: ['https://image-generator-with-open-ai.vercel.app', 'https://86.127.229.93']
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Public static files
app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai', require('./routes/imageGenerator'))

app.listen(port, () => console.log(`Server start on port ${port}`))
