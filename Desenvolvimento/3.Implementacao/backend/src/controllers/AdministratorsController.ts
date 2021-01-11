import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as Yup from 'yup'
import { hash } from 'bcryptjs'

import AppError from '../errors/AppError'

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

    const checkUserExists = await administratorsRepository.findOne({
      where: { email },
    })

    if (checkUserExists) {
      throw new AppError('Email address already in use.')
    }

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

    const hashedPassword = await hash(password, 8)

    const hashedPasswordData = {
      name,
      email,
      password: hashedPassword,
      position_id,
    }

    const administrator = administratorsRepository.create(hashedPasswordData)

    await administratorsRepository.save(administrator)

    return response.status(201).json(administrator)
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params

    const administratorsRepository = getRepository(Administrator)

    await administratorsRepository.delete(id)

    return response.json({ message: `Administrator ${id} Deleted` })
  },

  async update(request: Request, response: Response) {
    const {
      name,
      email,
      password,
      position_id,
    } = request.body

    const { id } = request.params

    const administratorsRepository = getRepository(Administrator)

    const hashedPassword = await hash(password, 8)

    const newData = {
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

    await schema.validate(newData, {
      abortEarly: false,
    })

    const hashedPasswordNewData = {
      name,
      email,
      password: hashedPassword,
      position_id,
    }

    await administratorsRepository.update(id, hashedPasswordNewData)

    return response.json({ message: `Administrator ${id} Updated` })
  }
}