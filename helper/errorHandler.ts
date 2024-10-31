import { Request, Response, NextFunction } from 'express'
import HttpError from '../types/httpError.ts'

const errorHandler = (
  error: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const errStatus = error.statusCode || 500;
    const errMsg = error.message || 'Something went wrong';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
    })
}

export default errorHandler
