import Route from '@ioc:Adonis/Core/Route'

// Route.get('/joke', 'JokeController.getJoke').middleware('TokenValidate')
Route.on('/joke').redirectToPath('https://geek-jokes.sameerkumar.website/api?format=json').middleware('TokenValidate')
