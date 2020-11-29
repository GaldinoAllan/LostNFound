import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Item from '../models/Item'

export default {
  async index(request: Request, response: Response) {
    const itemsRepository = getRepository(Item)

    const items = await itemsRepository.find()

    return response.json(items)
  },

  async show(request: Request, response: Response) {
    const { id } = request.params

    const itemsRepository = getRepository(Item)

    const item = await itemsRepository.findOneOrFail(id)

    return response.json(item)
  },

  async create(request: Request, response: Response) {
    const {
      name,
      description,
      date,
      category_id,
      place_id
    } = request.body

    const itemsRepository = getRepository(Item)

    const requestImages = request.files as Express.Multer.File[]

    const images = requestImages.map(image => {
      return { path: image.filename }
    })

    const item = itemsRepository.create({
      name,
      description,
      date,
      category_id,
      place_id,
      images,
    })

    await itemsRepository.save(item)

    return response.status(201).json(item)
  }
}