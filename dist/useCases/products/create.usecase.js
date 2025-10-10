"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductUseCase = createProductUseCase;
const library_1 = require("@prisma/client/runtime/library");
const crypto_1 = __importDefault(require("crypto"));
const databaseManager_1 = require("../../libs/databaseManager");
async function createProductUseCase(payload) {
    const database = databaseManager_1.databaseManager.getDatabase();
    const sku = crypto_1.default.randomUUID();
    const result = await database.product.create({
        data: {
            name: payload.name,
            description: payload.description,
            price: new library_1.Decimal(payload.price),
            stock: payload.stock,
            sku: sku,
            categoryId: payload.categoryId,
        },
    });
    return result;
}
