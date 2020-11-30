import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as Yup from 'yup'

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

    const data = { name }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    })

    const place = placeRepository.create(data)

    await placeRepository.save(place)

    return response.status(201).json(place)
  }
}