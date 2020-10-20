import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";

import AppError from './AppError'

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrors;

    error.inner.forEach((err) => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({
      message: "Validation fails",
      errors,
    });
  } else if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }
  console.error(error);

  return response.status(500).json({
    message: "Internal server error",
  });
};

export default errorHandler;
