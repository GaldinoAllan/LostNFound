import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Place from '../models/Place'

export default {
  async index(request: Request, response: Response) {
    const placeRepository = getRepository(Place)

    const places = await placeRepository.find()

    return response.json(places)
  },

  async create(request: Request, response: Response) {
    const { name } = request.body

    const placeRepository = getRepository(Place)

    const place = placeRepository.create({ name })

    await placeRepository.save(place)

    return response.status(201).json(place)
  }
}