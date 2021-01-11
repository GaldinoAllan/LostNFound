import { Router } from 'express'

import PlacesController from '../controllers/PlacesController'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const placesRouter = Router()

placesRouter.post('/', PlacesController.create, ensureAuthenticated)
placesRouter.get('/', PlacesController.index)
placesRouter.put('/:id', PlacesController.update, ensureAuthenticated)
placesRouter.delete('/:id', PlacesController.delete, ensureAuthenticated)

export default placesRouter
