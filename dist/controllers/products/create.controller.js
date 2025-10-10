"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductSchema = void 0;
exports.createProductController = createProductController;
const zod_1 = require("zod");
const create_usecase_1 = require("../../useCases/products/create.usecase");
exports.CreateProductSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    price: zod_1.z.number(),
    stock: zod_1.z.number(),
    categoryId: zod_1.z.string(),
});
async function createProductController(req, res, next) {
    try {
        const payload = req.body;
        const parsed = exports.CreateProductSchema.safeParse(payload);
        if (!parsed.success) {
            throw new Error(parsed.error.message);
        }
        const result = await (0, create_usecase_1.createProductUseCase)(parsed.data);
        res.status(201).json({
            status: "ok",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
}
