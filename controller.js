// OpenAI Library
// https://github.com/openai/openai-node
const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

const generateImageAI = async (req, res) => {
  try {
    const response = await openai.createImage({
      prompt: 'crocodile on a boat',
      n: 1,
      size: '512x512'
    })
    const url = response.data.data[0].url

    res.status(200).json({
      success: true,
      url: url
    })

  } catch (error) {
    // for development 
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(400).json({
      success: false,
      error: 'Some error occurred while creating the image'
    })
    
  }
}
module.exports = { generateImageAI }
