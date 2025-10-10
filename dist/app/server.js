"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const http_1 = __importDefault(require("http"));
const logger_1 = require("../middlewares/logger");
class Server {
    constructor(application, port) {
        this.app = application;
        this.port = port;
        this.httpServer = http_1.default.createServer(this.app.app);
        this.app.initRestRoutes();
    }
    start() {
        this.httpServer.listen(this.port, () => {
            logger_1.logger.info(`🚀 Server running on http://localhost:${this.port}`);
        });
    }
}
exports.Server = Server;
