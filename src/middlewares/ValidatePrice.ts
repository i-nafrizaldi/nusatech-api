import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const validatePrice = [
  body("price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
