"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneProductUseCase = deleteOneProductUseCase;
const databaseManager_1 = require("../../libs/databaseManager");
async function deleteOneProductUseCase(productId) {
    const database = databaseManager_1.databaseManager.getDatabase();
    const productToDelete = await database.product.findUnique({
        where: {
            id: productId,
        },
    });
    await database.product.delete({
        where: {
            id: productId,
        },
    });
    await database.productImage.deleteMany({
        where: {
            productId,
        },
    });
    return productToDelete;
}
