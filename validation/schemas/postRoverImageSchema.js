import Joi from "joi";

const postRoverImageSchema = Joi.object({
  userId: Joi.string().pattern(/^\d+$/).required().messages({
    "string.base": "userId must be a string.",
    "string.pattern.base": "userId must only contain numeric characters.",
    "any.required": "userId is required.",
  }),
  userName: Joi.string().min(1).required().messages({
    "string.base": "userName must be a string.",
    "string.min": "userName cannot be empty.",
    "any.required": "userName is required.",
  }),
  userApiKey: Joi.string().min(1).required().messages({
    "string.base": "userApiKey must be a string.",
    "string.min": "userApiKey cannot be empty.",
    "any.required": "userApiKey is required.",
  }),
});

export default postRoverImageSchema;
