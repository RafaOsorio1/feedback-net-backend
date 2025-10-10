"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategoryController = createCategoryController;
const zod_1 = require("zod");
const create_useCase_1 = require("../../useCases/categories/create.useCase");
async function createCategoryController(req, res, next) {
    try {
        const bodyParsed = zod_1.z
            .object({
            name: zod_1.z.string().min(1),
        })
            .safeParse(req.body);
        if (!bodyParsed.success) {
            res.status(400).json(bodyParsed.error);
            return;
        }
        const result = await (0, create_useCase_1.createCategoryUseCase)(bodyParsed.data.name);
        res.status(201).json({
            status: "success",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
}
