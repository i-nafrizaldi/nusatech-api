import { Router } from "express";
import { ProductController } from "../controllers/product.controller";
import { validatePrice } from "../middlewares/ValidatePrice";

export class ProductRouter {
  private productController: ProductController;
  private router: Router;

  constructor() {
    this.productController = new ProductController();
    this.router = Router();
    this.initializeRouters();
  }

  private initializeRouters(): void {
    this.router.get("/", this.productController.getProductsController);
    this.router.post(
      "/",
      validatePrice,
      this.productController.createProductController
    );
    this.router.get("/:id", this.productController.getProductController);
    this.router.patch(
      "/:id",
      validatePrice,
      this.productController.updateProductController
    );
    this.router.delete("/:id", this.productController.deleteProductController);
  }

  getRouter(): Router {
    return this.router;
  }
}
