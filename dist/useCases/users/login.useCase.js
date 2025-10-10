"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserUseCase = loginUserUseCase;
const databaseManager_1 = require("../../libs/databaseManager");
const hash_1 = require("../../libs/hash");
const jwt_1 = require("../../libs/jwt");
async function loginUserUseCase(credentials) {
    const database = databaseManager_1.databaseManager.getDatabase();
    const user = await database.user.findUnique({
        where: {
            email: credentials.email,
        },
    });
    if (!user) {
        throw new Error("Invalid credentials");
    }
    const isPasswordValid = await (0, hash_1.comparePassword)(credentials.password, user.password);
    if (!isPasswordValid) {
        throw new Error("Invalid credentials");
    }
    const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
    };
    const token = await (0, jwt_1.generateJWT)(payload);
    return {
        token,
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
            address: user.address,
            phone: user.phone,
        },
    };
}
