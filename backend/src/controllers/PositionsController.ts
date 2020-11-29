import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Position from '../models/Position'

export default {
  async index(request: Request, response: Response) {
    const positionRepository = getRepository(Position)

    const positions = await positionRepository.find()

    return response.json(positions)
  },

  async create(request: Request, response: Response) {
    const { name } = request.body

    const positionRepository = getRepository(Position)

    const position = positionRepository.create({ name })

    await positionRepository.save(position)

    return response.status(201).json(position)
  }
}