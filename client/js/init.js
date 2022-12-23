function onSubmit(e) {
  e.preventDefault()

  document.querySelector('.msg').textContent = ''
  document.querySelector('#image').src = ''

  const prompt = document.querySelector('#prompt').value
  const size = document.querySelector('#size').value

  if (prompt === '') {
    alert('Please add some text')
    return
  }

  generateImageRequest(prompt, size)
}

async function generateImageRequest(prompt, size) {
  try {
    showSpinner()

    const response = await fetch('https://image-generator-with-openai.onrender.com/openai/imageGenerator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        prompt,
        size
      })
    })

    if (!response.ok) {
      removeSpinner()
      throw new Error('That image could not be generated')
    }

    const data = await response.json()

    const imageUrl = data.url

    document.querySelector('#image').src = imageUrl

    removeSpinner()
  } catch (error) {
    document.querySelector('.msg').textContent = error
  }
}

function showSpinner() {
  document.querySelector('#loading').classList.add('lds-ripple')
}

function removeSpinner() {
  document.querySelector('#loading').classList.remove('lds-ripple')
}

document.querySelector('#image-form').addEventListener('submit', onSubmit)
