"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImages = createImages;
const databaseManager_1 = require("../../libs/databaseManager");
async function createImages(params) {
    const database = databaseManager_1.databaseManager.getDatabase();
    const { imageURLs, productId } = params;
    await database.productImage.createMany({
        data: imageURLs.map((url) => ({
            productId,
            url,
        })),
    });
}
