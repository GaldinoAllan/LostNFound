import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as Yup from 'yup'

import itemView from '../views/items_view'
import Item from '../models/Item'

export default {
  async index(request: Request, response: Response) {
    const itemsRepository = getRepository(Item)

    const items = await itemsRepository.find({
      relations: ['images']
    })

    return response.json(itemView.renderMany(items))
  },

  async show(request: Request, response: Response) {
    const { id } = request.params

    const itemsRepository = getRepository(Item)

    const item = await itemsRepository.findOneOrFail(id, {
      relations: ['images']
    })

    return response.json(itemView.render(item))
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

    const data = {
      name,
      description,
      date,
      category_id,
      place_id,
      images,
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required().max(300),
      date: Yup.date().required(),
      category_id: Yup.number().required(),
      place_id: Yup.number().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      )
    });

    await schema.validate(data, {
      abortEarly: false,
    })

    const item = itemsRepository.create(data)

    await itemsRepository.save(item)

    return response.status(201).json(item)
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params

    const itemsRepository = getRepository(Item)

    await itemsRepository.delete(id)

    return response.json({ message: `Item ${id} Deleted` })
  },

  async update(request: Request, response: Response) {
    const {
      name,
      description,
      date,
      category_id,
      place_id
    } = request.body

    console.log(request.body);

    const { id } = request.params

    const itemsRepository = getRepository(Item)

    // const requestImages = request.files as Express.Multer.File[]

    // if (requestImages) {
    //   const images = requestImages.map(image => {
    //     return { path: image.filename }
    //   })
    // }

    const newData = {
      name,
      description,
      date,
      category_id,
      place_id,
      // images,
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required().max(300),
      date: Yup.date().required(),
      category_id: Yup.number().required(),
      place_id: Yup.number().required(),
      // images: Yup.array(
      //   Yup.object().shape({
      //     path: Yup.string().required(),
      //   })
      // )
    });

    await schema.validate(newData, {
      abortEarly: false,
    })

    await itemsRepository.update(id, newData)

    return response.json({ message: `Item ${id} Updated` })
  }
}