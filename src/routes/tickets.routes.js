import { Router } from "express";
import { getTickets, getTicketsById, getTicketsByTheirId, insertTickets } from "../controllers/tickets.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { ticketSchema } from "../schemas/tickets.schemas.js";

const ticketsRouter = Router()

ticketsRouter.get("/tickets", getTickets)
ticketsRouter.get("/tickets/:id", getTicketsById)
ticketsRouter.get("/tickets/selected/:id", getTicketsByTheirId)
ticketsRouter.post("/tickets",  validateSchema(ticketSchema), insertTickets)

export default ticketsRouter