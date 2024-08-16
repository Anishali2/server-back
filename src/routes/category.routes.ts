import { Router } from "express";

import CategoryController from "../controller/Category.controller";
import { validator } from "../middleware";
import { createCategoryJoi } from "../validations/category/category.validator";
export const router: Router = Router();

router.post(
  "/",
  validator(createCategoryJoi),
  CategoryController.createCategory,
);
router.get("/", CategoryController.getCategory);
router.get("/:id", CategoryController.getCategoryById);

router.patch(
  "/:id",
  validator(createCategoryJoi),
  CategoryController.updateCategory,
);
router.delete("/:id", CategoryController.deleteCategory);
