import axios from 'axios'
import { config } from '../config.js'

const getRoverImages = async (userApiKey) => {
  const url = `${config.nasaApiPhotoUrl}?sol=${config.sol}&camera=${config.config}&api_key=${userApiKey}`
  const result = await axios.get(url)
  return result.data
}

export default getRoverImages
