import { Router } from "express";
import { getTickets, getTicketsById } from "../controllers/tickets.controllers.js";

const ticketsRouter = Router()

ticketsRouter.get("/tickets", getTickets)
ticketsRouter.get("/tickets/:id", getTicketsById)

export default ticketsRouter