import express, { Router } from "express";
const indexRouter: Router = express.Router();

import { router as authRouter } from "./auth.routes";
import { router as categoryRouter } from "./category.routes";
import { router as invoiceRouter } from "./invoice.routes";
import { router as userRouter } from "./user.routes";
const routes = [
  {
    path: "/auth",
    router: authRouter,
  },
  {
    path: "/category",
    router: categoryRouter,
  },
  {
    path: "/user",
    router: userRouter,
  },
  {
    path: "/invoice",
    router: invoiceRouter,
  },
];
routes.forEach((route) => {
  indexRouter.use(route.path, route.router);
});
export default indexRouter;
