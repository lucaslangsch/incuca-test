import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Jwt from '../Auth/authFunctions'

export default class tokenValidate {
  public async handle(
    { request, response }: HttpContextContract,
    next: () => Promise<void>
  ) {
    const token = request.headers().authorization
    if (!token) {
      response.status(400).json({ message: '"token" is required' })
      return
    }
   
    try {
      Jwt.getPayload(token)
      await next()
    } catch (error) {
      response.status(400).json({ message: '"token" is invalid' })
    }
  }
}