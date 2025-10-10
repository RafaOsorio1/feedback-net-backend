"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_middleware_1 = __importDefault(require("../../middlewares/upload.middleware"));
const images_controller_1 = require("./images.controller");
class ImagesRoutes {
    constructor() {
        this.name = "images";
        this.router = (0, express_1.Router)();
        this.initRoutes();
    }
    initRoutes() {
        this.router.post("/", upload_middleware_1.default.array("images", 10), images_controller_1.imagesController);
    }
    initChildRoutes() { }
}
exports.default = ImagesRoutes;
