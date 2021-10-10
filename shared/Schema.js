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
  postSchema: Joi.object({
    title: Joi.string().min(8).max(50).required(),
    body: Joi.string().max(100).required(),
  }),
};

module.exports = schema;
