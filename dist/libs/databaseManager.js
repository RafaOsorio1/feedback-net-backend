"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseManager = exports.DatabaseManager = void 0;
const client_1 = require("@prisma/client");
const logger_1 = require("../middlewares/logger");
class DatabaseManager {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    static getInstance() {
        if (!DatabaseManager.instance) {
            DatabaseManager.instance = new DatabaseManager();
        }
        return DatabaseManager.instance;
    }
    async connect() {
        logger_1.logger.info("⌛️ - Connecting to the database...");
        try {
            await this.prisma.$connect();
            logger_1.logger.info("✅ - Connected to database");
        }
        catch (error) {
            logger_1.logger.error("❌ - Error connecting to the database:", error);
        }
    }
    async disconnect() {
        logger_1.logger.info("⌛️ - Disconnecting from the database...");
        try {
            await this.prisma.$disconnect();
            logger_1.logger.info("✅ - Disconnected from database");
        }
        catch (error) {
            logger_1.logger.error("❌ - Error disconnecting from the database:", error);
        }
    }
    getDatabase() {
        return this.prisma;
    }
}
exports.DatabaseManager = DatabaseManager;
exports.databaseManager = DatabaseManager.getInstance();
