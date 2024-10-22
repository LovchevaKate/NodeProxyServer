export function findMostRecentPhoto(photos) {
  const photo = photos.reduce((mostRecent, currentPhoto) => {
    return new Date(currentPhoto.earth_date) > new Date(mostRecent.earth_date)
      ? currentPhoto
      : mostRecent
  })

  return photo.img_src
}
