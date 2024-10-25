import { Request, Response, NextFunction } from 'express'
import HttpError from '../types/httpError.ts'

const errorHandler = (
  error: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { statusCode, message } = error

  res.status(statusCode).json({
    status: 'error',
    message
  })
}

export default errorHandler
