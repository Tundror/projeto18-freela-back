import { Router } from "express"
import citiesRouter from "./cities.routes.js"
import ticketsRouter from "./tickets.routes.js"

const router = Router()

router.use(citiesRouter)
router.use(ticketsRouter)

export default router