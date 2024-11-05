import { Request, Response, NextFunction } from 'express'
import HttpError from '../types/httpError.ts'
import * as Sentry from "@sentry/node";
import {Logger} from "./logger.ts"

const errorHandler = (
  error: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const errStatus = error.status|| 500;
    const errMsg = error.message || 'Something went wrong';

    Logger.error(error);

    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
    })
}

export default errorHandler
