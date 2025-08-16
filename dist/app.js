"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const env_1 = require("./app/config/env");
const router_1 = require("./app/router");
const globalErrorhandler_1 = require("./app/middlewares/globalErrorhandler");
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.set("trust proxy", 1);
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: env_1.envVars.FRONTEND_URL,
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.use("/api/v1", router_1.router);
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the Expense Tracker",
    });
});
app.use(globalErrorhandler_1.globalErrorHandler);
app.use(notFound_1.default);
exports.default = app;
