"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneProductController = getOneProductController;
const zod_1 = require("zod");
const getOne_useCase_1 = require("../../useCases/products/getOne.useCase");
async function getOneProductController(req, res, next) {
    try {
        const id = req.params.id;
        if (!id) {
            throw new Error("id is required");
        }
        const idParsed = zod_1.z.string().uuid().safeParse(id);
        if (!idParsed.success) {
            throw new Error(idParsed.error.message);
        }
        const product = await (0, getOne_useCase_1.getOneProductUseCase)(idParsed.data);
        res.status(200).json({
            status: "ok",
            data: product,
        });
    }
    catch (error) {
        next(error);
    }
}
