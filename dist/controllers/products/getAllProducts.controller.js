"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsController = getProductsController;
const zod_1 = require("zod");
const GetProductsPaginated_1 = require("../../useCases/products/GetProductsPaginated");
async function getProductsController(req, res, next) {
    try {
        const queryParsed = zod_1.z
            .object({
            page: zod_1.z.string().optional(),
            limit: zod_1.z.string().optional(),
        })
            .safeParse(req.query);
        if (!queryParsed.success) {
            throw new Error(queryParsed.error.message);
        }
        const products = await (0, GetProductsPaginated_1.getAllProductsUseCase)({
            page: Number(queryParsed.data.page) || 1,
            limit: Number(queryParsed.data.limit) || 10,
        });
        res.status(200).json({
            status: "ok",
            code: 200,
            data: products,
        });
    }
    catch (error) {
        next(error);
    }
}
