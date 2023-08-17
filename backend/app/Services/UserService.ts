import User from 'App/Models/User'
import scrypt from '@ioc:Adonis/Core/Hash'
import Jwt from '../Auth/authFunctions'

async function login(req: any): Promise<any> {
  const user = await User.findBy('email', req.email)
  if (!user) {
    return { status: 400, data: { message: 'Username or password invalid' } }
  }

  const password = await scrypt.verify(user.$attributes.password, req.password)
  if (!password) {
    return { status: 400, data: { message: 'Username or password invalid' } }
  }

  try {
    const token = Jwt.createToken(req.email)
    if (!token) {
      throw new Error()
    }
    return { status: 200, data: { token } }
  } catch (error) {
    return { status: 400, data: { message: error.message } }
  }
}

export default {
  login,
}
