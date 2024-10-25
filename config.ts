import dotenv from 'dotenv'

dotenv.config()

const config = {
  port: process.env.PORT,
  nasaApiKey: process.env.NASA_API_KEY,
  nasaApiUrl: process.env.NASA_API_URL,
  nasaApiPhotoUrl: process.env.NASA_API_PHOTO_URL,
  sol: process.env.SOL,
  camera: process.env.CAMERA
}

export { config }
