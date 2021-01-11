import { Router } from 'express'

import AdministratorsController from '../controllers/AdministratorsController'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const administratorsRouter = Router()

administratorsRouter.use(ensureAuthenticated)

administratorsRouter.post('/', AdministratorsController.create)
administratorsRouter.get('/', AdministratorsController.index)
administratorsRouter.put('/:id', AdministratorsController.update)
administratorsRouter.delete('/:id', AdministratorsController.delete)

export default administratorsRouter

