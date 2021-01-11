import { Router } from 'express'

import CategoriesController from '../controllers/CategoriesController'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const categoriesRouter = Router()

categoriesRouter.post('/', CategoriesController.create, ensureAuthenticated)
categoriesRouter.get('/', CategoriesController.index)
categoriesRouter.put('/:id', CategoriesController.update, ensureAuthenticated)
categoriesRouter.delete('/:id', CategoriesController.delete, ensureAuthenticated)

export default categoriesRouter

