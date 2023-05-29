import { Router } from "express";
import { getCities, getCitiesById, insertCity } from "../controllers/citites.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { citySchema } from "../schemas/cities.schemas.js";

const citiesRouter = Router()

citiesRouter.get("/cities", getCities)
citiesRouter.get("/cities/:id", getCitiesById)
citiesRouter.post("/cities", validateSchema(citySchema), insertCity)

export default citiesRouter