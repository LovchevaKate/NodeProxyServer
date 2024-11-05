import express, { Request, Response, NextFunction } from 'express'
import fetchMeteors from '../useCases/fetchMeteors.ts'
import getRoverImage from '../useCases/getRoverImage.ts'
import { getMeteorSchema } from '../validation/schemas/getMeteorSchema.ts'
import { validateRequest } from '../validation/validator.ts'
import { postRoverImageSchema } from '../validation/schemas/postRoverImageSchema.ts'
import { MeteorQuery } from '../types/meteorRequest.ts'

const meteorRouter = express.Router()

meteorRouter.get(
  '/meteors',
  validateRequest(getMeteorSchema, 'query'),
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const meteorQuery: MeteorQuery = request.query
      const isWereDangerousMeteors = meteorQuery.wereDangerousMeteors === 'true'
      const meteors = await fetchMeteors(meteorQuery.date!, Number(meteorQuery.count), isWereDangerousMeteors)
      response.render('meteor.njk', { meteors })
    } catch (error) {
      next(error)
    }
  }
)

meteorRouter.get(
  '/rover',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      response.render('roverImageForm.njk')
    } catch (error) {
      next(error)
    }
  }
)

meteorRouter.post(
  '/roverImage',
  validateRequest(postRoverImageSchema, 'body'),
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { userId, userName, userApiKey } = request.body
      const image = await getRoverImage(userApiKey)
      response.render('roverImage.njk', { image, userId, userName })
    } catch (error) {
      next(error)
    }
  }
)

export default meteorRouter
