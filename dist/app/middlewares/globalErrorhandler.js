"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const env_1 = require("../config/env");
const error_helper_1 = __importDefault(require("../ErrorHelpers/error.helper"));
const handleDuplicateError_1 = require("../helper/handleDuplicateError");
const handleCastError_1 = require("../helper/handleCastError");
const handleZodError_1 = require("../helper/handleZodError");
const handleValidationError_1 = require("../helper/handleValidationError");
;
const globalErrorHandler = (error, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) => __awaiter(void 0, void 0, void 0, function* () {
    let statusCode = 500;
    let message = "Something Went Wrong!";
    let errorSources = [];
    // Duplicate error
    if (error.code === 11000) {
        const simplifiedError = (0, handleDuplicateError_1.handleDuplicateError)(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
    }
    //Cast Error / Object ID error
    else if (error.name === "CastError") {
        const simplifiedError = (0, handleCastError_1.handleCastError)(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
    }
    // Zod Error Validation
    else if (error.name === "ZodError") {
        const simplifiedError = (0, handleZodError_1.handleZodError)(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSources = simplifiedError.errorSources;
    }
    //MongoDB Validation error
    else if (error.name === "ValidationError") {
        const simplifiedError = (0, handleValidationError_1.handleValidationError)(error);
        statusCode = simplifiedError.statusCode;
        errorSources = simplifiedError.errorSources;
        message = simplifiedError.message;
    }
    else if (error instanceof error_helper_1.default) {
        statusCode = error.statusCode;
        message = error.message;
    }
    else if (error instanceof Error) {
        statusCode = 500;
        message = error.message;
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        error: env_1.envVars.NODE_ENV === "development" ? error : null,
        stack: env_1.envVars.NODE_ENV === "development" ? error.stack : null,
    });
});
exports.globalErrorHandler = globalErrorHandler;
