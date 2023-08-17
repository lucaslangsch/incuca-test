import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import JokeService from 'App/Services/JokeService'

export default class JokeController {
  public async getJoke({ response }: HttpContextContract) {    
    const { status, data } = await JokeService.getJoke()
    return response.status(status).json(data)
  }
}
