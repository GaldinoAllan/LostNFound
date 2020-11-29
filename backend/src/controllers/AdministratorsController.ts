import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Administrator from '../models/Administrator'

export default {
  async index(request: Request, response: Response) {
    const administratorsRepository = getRepository(Administrator)

    const administrators = await administratorsRepository.find()

    return response.json(administrators)
  },

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      password,
      position_id,
    } = request.body

    const administratorsRepository = getRepository(Administrator)

    const administrator = administratorsRepository.create({
      name,
      email,
      password,
      position_id,
    })

    await administratorsRepository.save(administrator)

    return response.status(201).json(administrator)
  }
}