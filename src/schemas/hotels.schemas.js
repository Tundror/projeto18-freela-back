import Joi from "joi";

export const hotelSchema = Joi.object({
  name: Joi.string().required(),
  dayPrice: Joi.number().required(),
  city: Joi.number().required(),
  breakfast: Joi.boolean().required(),
  pool: Joi.boolean().required(),
  towel: Joi.boolean().required(),
  image: Joi.string().required(),
  description: Joi.string().required(),
  air: Joi.boolean().optional(),
});