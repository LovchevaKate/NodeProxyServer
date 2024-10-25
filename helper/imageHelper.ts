import { Photo } from "../types/photo.ts"
export function findMostRecentPhoto(photos: Array<Photo>) {
  const photo = photos.reduce((mostRecent: Photo, currentPhoto: Photo) => {
    return new Date(currentPhoto.earth_date) > new Date(mostRecent.earth_date)
      ? currentPhoto
      : mostRecent
  })

  return photo.img_src
}
