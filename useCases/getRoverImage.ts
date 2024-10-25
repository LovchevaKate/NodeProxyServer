import getRoverImages from '../repository/imageRepository.js'
import { findMostRecentPhoto } from '../helper/imageHelper.js'

const getRoverImage = async (userApiKey: string) => {
  const roverImages = await getRoverImages(userApiKey)
  const mostRecentPhoto = findMostRecentPhoto(roverImages.photos)
  return mostRecentPhoto
}

export default getRoverImage
