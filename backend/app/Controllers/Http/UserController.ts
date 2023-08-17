import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserService from 'App/Services/UserService'

export default class UserController {
  public async login({ request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const { status, data } = await UserService.login({ email, password })
    return response.status(status).json(data)
  }
}
