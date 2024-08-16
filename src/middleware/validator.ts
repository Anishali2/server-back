import { NextFunction, Request, Response } from "express";
export const validator = function (schema: any) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const validated = await schema.validateAsync(req.body);
      req.body = validated;
      next();
    } catch (err: any) {
      err.code = 422;
      next(err);
    }
  };
};
