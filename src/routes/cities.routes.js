import { Router } from "express";
import { getCities, getCitiesById } from "../controllers/citites.controllers.js";

const citiesRouter = Router()

citiesRouter.get("/cities", getCities)
citiesRouter.get("/cities/:id", getCitiesById)

export default citiesRouter