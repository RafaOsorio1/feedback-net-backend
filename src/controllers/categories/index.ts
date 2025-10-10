import { Router } from "express";

import { IRoutes } from "../../routes";
import { createCategoryController } from "./create.controller";

export default class CategoriesRoutes implements IRoutes {
  readonly name = "categories";
  readonly router: Router = Router();

  constructor() {
    this.initRoutes();
  }

  initRoutes(): void {
    this.router.post("/", createCategoryController);
  }

  initChildRoutes(): void {}
}
