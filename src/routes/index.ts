import type { Application } from "express";
import { Router } from "express";
import UsersRoutes from "../controllers/users/index";

export interface IRoutes {
  readonly name: string;
  readonly router: Router;

  initRoutes(): void;
  initChildRoutes?(): void;
}

function registerApiRoutes(app: Application, prefix = ""): void {
  app.use(`${prefix}/auth`, new UsersRoutes().router);
  app.use(`${prefix}/auth/test`, (req, res) => {
    res.send({
      status: "ok",
      data: "test",
    });
  });
}

export function initRestRoutes(app: Application): void {
  const prefix = "/api";

  app.route("/").all((req, res) => {
    res.send({ status: "OK", data: "API OK" });
  });

  registerApiRoutes(app, prefix);
}
