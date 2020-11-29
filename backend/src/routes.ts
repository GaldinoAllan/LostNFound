import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'

import AdministratorsController from './controllers/AdministratorsController'
import PositionsController from './controllers/PositionsController'
import PlacesController from './controllers/PlacesController'
import ItemsController from './controllers/ItemsController'
import CategoriesController from './controllers/CategoriesController'


const routes = Router()
const upload = multer(uploadConfig)

// Administrators
routes.get('/administrators', AdministratorsController.index)
routes.post('/administrators', AdministratorsController.create)

// Positions
routes.get('/positions', PositionsController.index)
routes.post('/positions', PositionsController.create)

// Places
routes.get('/places', PlacesController.index)
routes.post('/places', PlacesController.create)

// Items
routes.get('/items', ItemsController.index)
routes.get('/items/:id', ItemsController.show)
routes.post('/items', upload.array('images'), ItemsController.create)

// Categories
routes.get('/categories', CategoriesController.index)
routes.post('/categories', CategoriesController.create)
export default routes