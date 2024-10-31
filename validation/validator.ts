import { Schema } from 'joi'
import { Request, Response, NextFunction } from 'express'
import HttpError from '../types/httpError.ts'

export const validateRequest = (schema: Schema, property = 'body') => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = property === 'body' ? req.body : req.query
    const { error } = schema.validate(data, { abortEarly: false })
    
    if (error) {
      next(
        new HttpError(
          `Validation error: ${error.details.map(detail => 
            detail.message
          )}`,
          400
        )
      )
    }

    next()
  }
}
