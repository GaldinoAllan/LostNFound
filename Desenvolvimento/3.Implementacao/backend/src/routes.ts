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
routes.post('/administrators', AdministratorsController.create)
routes.get('/administrators', AdministratorsController.index)
// routes.put('/administrators/:id', AdministratorsController.update)
routes.delete('/administrators/:id', AdministratorsController.delete)

// Positions
routes.post('/positions', PositionsController.create)
routes.get('/positions', PositionsController.index)
routes.put('/positions/:id', PositionsController.update)
routes.delete('/positions/:id', PositionsController.delete)

// Places
routes.post('/places', PlacesController.create)
routes.get('/places', PlacesController.index)
routes.put('/places/:id', PlacesController.update)
routes.delete('/places/:id', PlacesController.delete)

// Items
routes.post('/items', upload.array('images'), ItemsController.create)
routes.get('/items', ItemsController.index)
routes.get('/items/:id', ItemsController.show)
// routes.put('/items/:id', ItemsController.update)
routes.delete('/items/:id', ItemsController.delete)

// Categories
routes.post('/categories', CategoriesController.create)
routes.get('/categories', CategoriesController.index)
routes.put('/categories/:id', CategoriesController.update)
routes.delete('/categories/:id', CategoriesController.delete)

export default routes