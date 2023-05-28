import { Router } from "express";
import { getHotels, getHotelsById, getHotelsByTheirId } from "../controllers/hotels.controllers.js";

const hotelsRouter = Router()

hotelsRouter.get("/hotels", getHotels)
hotelsRouter.get("/hotels/:id", getHotelsById)
hotelsRouter.get("/hotels/selected/:id", getHotelsByTheirId)

export default hotelsRouter