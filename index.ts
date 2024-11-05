import "./sentry.js"
import express, { Application } from 'express'
import meteorRouter from './delivery/meteorsRouter.ts'
import bodyParser from 'body-parser'
import nunjucks from 'nunjucks'
import errorHandler from './helper/errorHandler.ts'
import { config } from './config.ts'

const app: Application = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.use(meteorRouter)
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`Server is running on port: ${config.port}`)
})
