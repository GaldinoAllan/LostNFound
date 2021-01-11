import { Router } from 'express'
import multer from 'multer'

import ItemsController from '../controllers/ItemsController'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

import uploadConfig from '../config/upload'

const itemsRouter = Router()

const upload = multer(uploadConfig)

itemsRouter.post('/', upload.array('images'), ItemsController.create, ensureAuthenticated)
itemsRouter.get('/', ItemsController.index)
itemsRouter.put('/:id', ItemsController.update, ensureAuthenticated)
itemsRouter.delete('/:id', ItemsController.delete, ensureAuthenticated)

export default itemsRouter

