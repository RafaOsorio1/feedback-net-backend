"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_controller_1 = require("./create.controller");
class CategoriesRoutes {
    constructor() {
        this.name = "categories";
        this.router = (0, express_1.Router)();
        this.initRoutes();
    }
    initRoutes() {
        this.router.post("/", create_controller_1.createCategoryController);
    }
    initChildRoutes() { }
}
exports.default = CategoriesRoutes;
