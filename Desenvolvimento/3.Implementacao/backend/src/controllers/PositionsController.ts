import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as Yup from 'yup'

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

    const data = { name }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    })

    const position = positionRepository.create(data)

    await positionRepository.save(position)

    return response.status(201).json(position)
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params

    const positionRepository = getRepository(Position)

    await positionRepository.delete(id)

    return response.json({ message: `Position ${id} Deleted` })
  }
}