import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import AppError from '../errors/AppError'

import authConfig from '../config/auth'

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAutenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  // Validação do Token JWT
  const authHeader = request.headers.authorization

  // se nao existir token
  if (!authHeader) {
    throw new AppError('JWT token is missing!', 401)
  }

  // Token vem no formato 'Bearer {token}, fazer split para obter apenas token
  const [, token] = authHeader.split(' ');

  // tentando decodificar o token para verificar a validade do mesmo
  try {
    const decoded = verify(token, authConfig.jwt.secret)

    const { sub } = decoded as TokenPayload

    // Incluindo informações do usuario a partir da chamada deste middleware

    request.user = {
      id: sub
    }

    return next()
  } catch {
    throw new AppError('Invalid JWT Token', 401)
  }
}