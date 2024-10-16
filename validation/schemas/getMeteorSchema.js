import Joi from "joi";

const getMeteorSchema = Joi.object({
  date: Joi.string().isoDate().required().messages({
    "date.base": "The date must be a valid ISO date format (YYYY-MM-DD).",
    "any.required": "The date parameter is required.",
  }),

  count: Joi.string().optional().messages({
    "any.optional": '"count" is optional but must be a string if provided',
  }),

  wereDangerousMeteors: Joi.string()
    .valid("true", "false")
    .optional()
    .messages({
      "string.base": "were-dangerous-meteors must be a string.",
      "any.only": 'were-dangerous-meteors must be either "true" or "false".',
    }),
});

export default getMeteorSchema;
