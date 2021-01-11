import { Router } from 'express'

import PositionsController from '../controllers/PositionsController'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'



const positionRouter = Router()

positionRouter.use(ensureAuthenticated)

positionRouter.post('/', PositionsController.create)
positionRouter.get('/', PositionsController.index)
positionRouter.put('/:id', PositionsController.update)
positionRouter.delete('/:id', PositionsController.delete)

export default positionRouter

