"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCategories = addCategories;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function addCategories() {
    await prisma.category.createMany({
        data: [
            {
                id: "clx8f6y5z0000j4xr7q1q2w3e",
                name: "clothes",
            },
            {
                id: "clx8f6y5z0001j4xr4h5j6k7l",
                name: "electronics",
            },
        ],
    });
}
addCategories();
