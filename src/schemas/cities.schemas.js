import Joi from "joi";

export const citySchema = Joi.object({
  name: Joi.string().required(),
  stateId: Joi.number().integer().required(),
});