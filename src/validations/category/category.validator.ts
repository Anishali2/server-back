import Joi from "joi";
import mongoose from "mongoose";
export const createCategoryJoi = Joi.object({
  category: Joi.string().required(),
  parentCategoryId: Joi.string()
    .custom((value, helpers) => {
      if (value === null) {
        return value;
      }
      if (!mongoose.Types.ObjectId.isValid(value)) {
        return helpers.message("Invalid parentCategoryId" as any);
      }
      return value;
    })
    .allow(null),
  user: Joi.required(),
});
