import { Router } from "express";
import upload from "../../middlewares/upload.middleware";
import { IRoutes } from "../../routes";
import { imagesController } from "./images.controller";

export default class ImagesRoutes implements IRoutes {
  readonly name = "images";
  readonly router: Router = Router();

  constructor() {
    this.initRoutes();
  }

  initRoutes(): void {
    this.router.post("/", upload.array("images", 10), imagesController);
  }

  initChildRoutes(): void {}
}
