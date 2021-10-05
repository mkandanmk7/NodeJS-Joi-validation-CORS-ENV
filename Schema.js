const Joi = require("joi");

// schema structure; predefind;
const schema = {
  registerSchema: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(12).required(),
  }),
  loginSchema: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(12).required(),
  }),
};

module.exports = schema;
