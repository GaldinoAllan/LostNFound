import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as Yup from 'yup'

import Administrator from '../models/Administrator'
import administratorView from '../views/administrator_view'

export default {
  async index(request: Request, response: Response) {
    const administratorsRepository = getRepository(Administrator)

    const administrators = await administratorsRepository.find()

    return response.json(administratorView.renderMany(administrators))
  },

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      password,
      position_id,
    } = request.body

    const administratorsRepository = getRepository(Administrator)

    const data = {
      name,
      email,
      password,
      position_id,
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      position_id: Yup.number().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    })

    const administrator = administratorsRepository.create(data)

    await administratorsRepository.save(administrator)

    return response.status(201).json(administrator)
  }
}