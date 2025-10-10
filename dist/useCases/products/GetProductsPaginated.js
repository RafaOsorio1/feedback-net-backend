"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProductsUseCase = getAllProductsUseCase;
const databaseManager_1 = require("../../libs/databaseManager");
async function getAllProductsUseCase(params) {
    const database = databaseManager_1.databaseManager.getDatabase();
    const products = await database.product.findMany({
        skip: (params.page - 1) * params.limit, //offset
        take: params.limit, //limit
        include: {
            images: true,
            category: true,
        },
    });
    const count = await database.product.count();
    const total_pages = Math.ceil(count / params.limit);
    return {
        data: products,
        meta: {
            page: params.page,
            limit: params.limit,
            total_pages: total_pages,
            total_count: count,
        },
    };
}
