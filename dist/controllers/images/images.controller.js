"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagesController = imagesController;
const zod_1 = require("zod");
const create_useCase_1 = require("../../useCases/images/create.useCase");
async function imagesController(req, res, next) {
    try {
        if (!req.files || (Array.isArray(req.files) && req.files.length === 0)) {
            res.status(400).json({ message: "No files uploaded" });
            return;
        }
        const queryParsed = zod_1.z
            .object({
            productId: zod_1.z.string(),
        })
            .safeParse(req.query);
        if (!queryParsed.success) {
            res.status(400).json({ message: "Missing productId" });
            return;
        }
        const files = Array.isArray(req.files) ? req.files : [req.files];
        const fileUrls = files.map((file) => file.path);
        await (0, create_useCase_1.createImages)({
            imageURLs: fileUrls,
            productId: queryParsed.data.productId,
        });
        res.json({
            status: "ok",
            data: fileUrls,
        });
    }
    catch (error) {
        next(error);
    }
}
