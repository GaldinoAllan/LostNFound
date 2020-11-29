import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Category from '../models/Category'

export default {
  async index(request: Request, response: Response) {
    const categoryRepository = getRepository(Category)

    const categories = await categoryRepository.find()

    return response.json(categories)
  },

  async create(request: Request, response: Response) {
    const { name } = request.body

    const categoryRepository = getRepository(Category)

    const category = categoryRepository.create({ name })

    await categoryRepository.save(category)

    return response.status(201).json(category)
  }
}