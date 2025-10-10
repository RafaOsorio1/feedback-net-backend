import { Router } from "express";
import { IRoutes } from "../../routes";
import { createProductController } from "./create.controller";
import { deleteOneProductController } from "./deleteOne.controller";
import { getProductsController } from "./getAllProducts.controller";
import { getOneProductController } from "./getOne.controller";

export default class ProductsRoutes implements IRoutes {
  readonly name = "Products";
  readonly router: Router = Router();

  constructor() {
    this.initRoutes();
  }

  initRoutes(): void {
    this.router.get("/", getProductsController);
    this.router.post("/create", createProductController);
    this.router
      .route("/:id")
      .get(getOneProductController)
      .delete(deleteOneProductController);
  }

  initChildRoutes(): void {}
}
