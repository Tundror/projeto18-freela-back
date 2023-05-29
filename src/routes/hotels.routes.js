import { Router } from "express";
import { getHotels, getHotelsById, getHotelsByTheirId, insertHotel } from "../controllers/hotels.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { hotelSchema } from "../schemas/hotels.schemas.js";

const hotelsRouter = Router()

hotelsRouter.get("/hotels", getHotels)
hotelsRouter.get("/hotels/:id", getHotelsById)
hotelsRouter.get("/hotels/selected/:id", getHotelsByTheirId)
hotelsRouter.post("/hotels", validateSchema(hotelSchema), insertHotel)

export default hotelsRouter