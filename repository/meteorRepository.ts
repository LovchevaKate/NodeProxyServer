import axios from 'axios'
import { config } from '../config.js'
import { getMondayAndFridayOfWeek } from '../helper/meteorHelper.js'

const getMeteors = async (date: string): Promise<any> => {
  const { monday, friday } = getMondayAndFridayOfWeek(date)

  const url = `${config.nasaApiUrl}?start_date=${monday}&end_date=${friday}&api_key=${config.nasaApiKey}`

  const result = await axios.get(url)
  return result.data.near_earth_objects
}

export default getMeteors
