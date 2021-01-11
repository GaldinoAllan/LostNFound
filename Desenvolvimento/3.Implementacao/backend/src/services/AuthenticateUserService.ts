import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import AppError from '../errors/AppError'

import authConfig from '../config/auth'

import Administrator from '../models/Administrator'

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: Administrator;
  token: string;
}

class AuthenticateUserService {
  async execute({ email, password }: Request): Promise<Response> {
    const administratorsRepository = getRepository(Administrator)

    const user = await administratorsRepository.findOne({ where: { email } })

    if (!user) {
      throw new AppError('Incorrect email or password.', 401)
    }

    // user.password = Senha criptografada
    // password = Senha tentada ao realizar login (não-criptografada)

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new AppError('Incorrect email or password.', 401)
    }

    // Se passou até aqui, o usuário pode ser autenticado

    // Criando token de autenticação
    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    })

    return {
      user,
      token
    }
  }
}

export default AuthenticateUserService