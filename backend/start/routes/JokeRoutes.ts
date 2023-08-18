import Route from '@ioc:Adonis/Core/Route'

const URL = 'https://geek-jokes.sameerkumar.website/api?format=json'

// Route.get('/joke', 'JokeController.getJoke').middleware('TokenValidate')
Route.on('/joke').redirectToPath(URL).middleware('TokenValidate')
