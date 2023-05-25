import { Router } from "express";
import { getHotels, getHotelsById } from "../controllers/hotels.controllers.js";

const hotelsRouter = Router()

hotelsRouter.get("/hotels", getHotels)
hotelsRouter.get("/hotels/:id", getHotelsById)

export default hotelsRouter