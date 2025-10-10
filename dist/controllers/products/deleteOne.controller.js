"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneProductController = deleteOneProductController;
const zod_1 = require("zod");
const deleteOne_useCase_1 = require("../../useCases/products/deleteOne.useCase");
async function deleteOneProductController(req, res, next) {
    try {
        const id = req.params.id;
        const idParsed = zod_1.z.string().uuid().safeParse(id);
        if (!idParsed.success) {
            throw new Error(idParsed.error.message);
        }
        const product = await (0, deleteOne_useCase_1.deleteOneProductUseCase)(id);
        res.status(200).json({
            status: "ok",
            data: product,
        });
    }
    catch (error) {
        next(error);
    }
}
