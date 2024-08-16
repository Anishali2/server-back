import Joi from "joi";

const registerUser = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  role: Joi.string().valid("user", "admin", "editor").default("user"),
  password: Joi.string().min(3).required(),
  createdAt: Joi.date().default(() => new Date()),
  updatedAt: Joi.date().default(() => new Date()),
});

export default registerUser;
