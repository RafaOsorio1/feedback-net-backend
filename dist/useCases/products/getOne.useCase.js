"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneProductUseCase = getOneProductUseCase;
const databaseManager_1 = require("../../libs/databaseManager");
async function getOneProductUseCase(id) {
    const database = databaseManager_1.databaseManager.getDatabase();
    return await database.product.findUnique({
        where: {
            id: id,
        },
    });
}
