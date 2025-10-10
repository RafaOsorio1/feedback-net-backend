import { Router } from "express";
import { IRoutes } from "../../routes";
import { loginController } from "./login.controller";
import { signupController } from "./signup.controller";

export default class UsersRoutes implements IRoutes {
  readonly name = "Users";
  readonly router: Router = Router();

  constructor() {
    this.initRoutes();
  }

  initRoutes(): void {
    this.router.post("/login", loginController);
    this.router.post("/signup", signupController);
  }

  initChildRoutes(): void {}
}
