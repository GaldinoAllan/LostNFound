import { Router } from 'express'

import sessionsRouter from './sessions.routes'
import positionsRouter from './positions.routes'
import administratorsRouter from './administrators.routes'
import placesRouter from './places.routes'
import itemsRouter from './items.routes'
import categoriesRouter from './categories.routes'

const routes = Router()

// Administrators
routes.use('/administrators', administratorsRouter)

// Positions
routes.use('/positions', positionsRouter)

// Places
routes.use('/places', placesRouter)

// Items
routes.use('/items', itemsRouter)

// Categories
routes.use('/categories', categoriesRouter)

// Sessions
routes.use('/sessions', sessionsRouter)

export default routes