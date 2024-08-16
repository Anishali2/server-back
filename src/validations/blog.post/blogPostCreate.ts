import Joi from "joi";
export const blogPostCreate = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  image: Joi.string().optional(),

  published: Joi.boolean().optional(),

  authorId: Joi.string().required(),
});
