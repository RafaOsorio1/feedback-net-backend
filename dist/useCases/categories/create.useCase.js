"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategoryUseCase = createCategoryUseCase;
const databaseManager_1 = require("../../libs/databaseManager");
async function createCategoryUseCase(name) {
    const database = databaseManager_1.databaseManager.getDatabase();
    const result = await database.category.create({
        data: {
            name,
        },
    });
    return result;
}
