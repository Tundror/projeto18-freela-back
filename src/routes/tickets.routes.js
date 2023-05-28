import { Router } from "express";
import { getTickets, getTicketsById, getTicketsByTheirId } from "../controllers/tickets.controllers.js";

const ticketsRouter = Router()

ticketsRouter.get("/tickets", getTickets)
ticketsRouter.get("/tickets/:id", getTicketsById)
ticketsRouter.get("/tickets/selected/:id", getTicketsByTheirId)

export default ticketsRouter