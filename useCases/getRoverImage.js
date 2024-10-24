import getRoverImages from '../repository/imageRepository.js'
import { findMostRecentPhoto } from '../helper/imageHelper.js'

const getRoverImage = async (userApiKey) => {
  const roverImages = await getRoverImages(userApiKey)
  const mostRecentPhoto = await findMostRecentPhoto(roverImages.photos)
  return mostRecentPhoto
}

export default getRoverImage
