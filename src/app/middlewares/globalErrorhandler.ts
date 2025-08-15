/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env";import { TErrorSources } from "../interface/error.types";
import AppError from "../ErrorHelpers/error.helper";
import { handleDuplicateError } from "../helper/handleDuplicateError";
import { handleCastError } from "../helper/handleCastError";
import { handleZodError } from "../helper/handleZodError";
import { handleValidationError } from "../helper/handleValidationError";
;

export const globalErrorHandler = async (
  error: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Something Went Wrong!";
  let errorSources: TErrorSources[] = [];

  // Duplicate error
  if (error.code === 11000) {
    const simplifiedError = handleDuplicateError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
  }

  //Cast Error / Object ID error
  else if (error.name === "CastError") {
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
  }
  // Zod Error Validation
  else if (error.name === "ZodError") {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources as TErrorSources[];
  }
  //MongoDB Validation error
  else if (error.name === "ValidationError") {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    errorSources = simplifiedError.errorSources as TErrorSources[];
    message = simplifiedError.message;
  } else if (error instanceof AppError) {
    statusCode = error.statusCode;
    message = error.message;
  } else if (error instanceof Error) {
    statusCode = 500;
    message = error.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    error: envVars.NODE_ENV === "development" ? error : null,
    stack: envVars.NODE_ENV === "development" ? error.stack : null,
  });
};
