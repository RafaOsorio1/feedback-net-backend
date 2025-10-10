"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_controller_1 = require("./create.controller");
const deleteOne_controller_1 = require("./deleteOne.controller");
const getAllProducts_controller_1 = require("./getAllProducts.controller");
const getOne_controller_1 = require("./getOne.controller");
class ProductsRoutes {
    constructor() {
        this.name = "Products";
        this.router = (0, express_1.Router)();
        this.initRoutes();
    }
    initRoutes() {
        this.router.get("/", getAllProducts_controller_1.getProductsController);
        this.router.post("/create", create_controller_1.createProductController);
        this.router
            .route("/:id")
            .get(getOne_controller_1.getOneProductController)
            .delete(deleteOne_controller_1.deleteOneProductController);
    }
    initChildRoutes() { }
}
exports.default = ProductsRoutes;
