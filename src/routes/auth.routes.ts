import { Router } from "express";

import AuthController from "../controller/Auth.controller";
import { validator } from "../middleware";
import {
  forgotPasswordValidator,
  loginUserValidator,
  resetPasswordValidator,
} from "../validations/user/Auth.validator";
export const router: Router = Router();

router.post("/", AuthController.createUser);
router.post("/login", validator(loginUserValidator), AuthController.login);
router.post(
  "/forgot-password",
  validator(forgotPasswordValidator),
  AuthController.forgotPassword,
);
router.post(
  "/reset-password",
  validator(resetPasswordValidator),
  AuthController.resetPassword,
);

router.post(
  "/change-password",
  validator(resetPasswordValidator),
  AuthController.changePassword,
);
