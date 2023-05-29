import Joi from "joi";

export const ticketSchema = Joi.object({
    departureId: Joi.number().integer().required(),
    destinationId: Joi.number().integer().required(),
    time: Joi.date().required(),
    price: Joi.number().required(),
    companyId: Joi.number().integer().required(),
  });