"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRestRoutes = initRestRoutes;
const index_1 = __importDefault(require("../controllers/users/index"));
function registerApiRoutes(app, prefix = "") {
    app.use(`${prefix}/auth`, new index_1.default().router);
    app.use(`${prefix}/auth/test`, (req, res) => {
        res.send({
            status: "ok",
            data: "test",
        });
    });
}
function initRestRoutes(app) {
    const prefix = "/api";
    app.route("/").all((req, res) => {
        res.send({ status: "OK", data: "API OK" });
    });
    registerApiRoutes(app, prefix);
}
