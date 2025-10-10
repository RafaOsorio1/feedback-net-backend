"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editProductUseCase = editProductUseCase;
const databaseManager_1 = require("../../libs/databaseManager");
async function editProductUseCase(id, data) {
    const database = databaseManager_1.databaseManager.getDatabase();
    await database.product.update({
        where: {
            id,
        },
        data: {
            name: data.name,
            description: data.description,
            price: data.price,
            stock: data.stock,
            updatedAt: new Date(),
        },
    });
    const result = await database.product.findUnique({
        where: {
            id,
        },
    });
    return result;
}
