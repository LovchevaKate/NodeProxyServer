const Joi = require("joi");

const getMeteorSchema = Joi.object({
  date: Joi.string().isoDate().required().max("now").messages({
    "date.max": "The date cannot be in the future.",
    "date.base": "The date must be a valid ISO date format (YYYY-MM-DD).",
    "any.required": "The date parameter is required.",
  }),

  count: Joi.string().optional().pattern(/^\d+$/).messages({
    "string.pattern.name": '"count" must only contain digits',
    "count.negative": '"count" cannot be less than 0',
    "any.optional": '"count" is optional but must be a string if provided',
  }),

  "were-dangerous-meteors": Joi.boolean().optional().default(false).messages({
    "boolean.base":
      "The value for were-dangerous-meteors must be true or false.",
  }),
});

export default getMeteorSchema;
