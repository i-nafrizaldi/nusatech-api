import { NextFunction, Request, Response } from "express";
import { getProductService } from "../services/product/get-product.service";
import { updateProductService } from "../services/product/update-product.service";
import { deleteProductService } from "../services/product/delete-product.service";
import { createProductService } from "../services/product/create-product.service";
import { getProductsService } from "../services/product/get-products.service";

export class ProductController {
  // create product
  async createProductController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await createProductService(req.body);

      return res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  }

  //get product list
  async getProductsController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getProductsService();

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  //get product
  async getProductController(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const result = await getProductService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  //update product
  async updateProductController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = req.params.id;
      const result = await updateProductService(Number(id), req.body);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  //update product
  async deleteProductController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = req.params.id;

      const result = await deleteProductService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
