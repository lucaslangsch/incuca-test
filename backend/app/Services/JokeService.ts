const URL = 'https://geek-jokes.sameerkumar.website/api?format=json'
import fetch from 'node-fetch'

async function getJoke() {
  try {
    const response = await fetch(URL)
    const { joke } = await response.json()
    return { status: 200, data: { joke } }
  } catch (error) {
    return { status: 400, data: { message: error.message } }
  }
}

export default {
  getJoke,
}
