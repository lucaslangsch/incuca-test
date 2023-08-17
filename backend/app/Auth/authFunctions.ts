import jwt, { Jwt, JwtPayload, SignOptions, VerifyOptions } from 'jsonwebtoken'

const secret = process.env.JWT_SECRET || 'xablau'

const jwtConfig: SignOptions = { algorithm: 'HS256', expiresIn: '1d' }
const verifyOptions: VerifyOptions = { algorithms: ['HS256'] }

const createToken = (payload: any): string => jwt.sign({ email: payload }, secret, jwtConfig)

const getPayload = (token: string): Jwt | JwtPayload | string =>
  jwt.verify(token, secret, verifyOptions)

export default { createToken, getPayload }
