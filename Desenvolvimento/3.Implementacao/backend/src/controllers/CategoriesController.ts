import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as Yup from 'yup'

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

    const data = { name }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    })

    const category = categoryRepository.create(data)

    await categoryRepository.save(category)

    return response.status(201).json(category)
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params

    const categoryRepository = getRepository(Category)

    await categoryRepository.delete(id)

    return response.json({ message: `Category ${id} Deleted` })
  }
}