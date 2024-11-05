import { Meteor } from "../types/meteor.ts"
import { CloseApproachData, EstimatedDiameter, NearEarthObjects } from "../types/nearEarthObjects.ts"

export function mapMeteors(data: NearEarthObjects) : Meteor[] {
  return  Object.values(data).flatMap((meteors) =>
    meteors.map((item) => {
      const { relativeVelocity, closeApproachDateFull } =
        extractCloseApproachData(item.close_approach_data)

      const result : Meteor = {
        id: item.id,
        name: item.name,
        diameter: getDiameter(item.estimated_diameter),
        is_potentially_hazardous_asteroid:
          item.is_potentially_hazardous_asteroid,
        closeApproachDateFull,
        relativeVelocity
      }

      return result
    })
  )
}

export function filterMeteors(meteors: Meteor[], count: number, wereDangerousMeteors: boolean) {
  meteors = meteors.filter(
    (meteor) =>
      meteor.is_potentially_hazardous_asteroid === wereDangerousMeteors
  )
  
  if (count && count > 0) {
    meteors = meteors.slice(0, count)
  }

  return meteors
}

export function getMondayAndFridayOfWeek(date: string) {
  const givenDate = new Date(date)
  const dayOfWeek = givenDate.getDay()

  const distanceToMonday = dayOfWeek - 1
  const monday = new Date(givenDate)
  monday.setDate(givenDate.getDate() - distanceToMonday)

  const distanceToFriday = 5 - dayOfWeek
  const friday = new Date(givenDate)
  friday.setDate(givenDate.getDate() + distanceToFriday)

  return { monday: formatDate(monday), friday: formatDate(friday) }
}

const getDiameter = (diameter: EstimatedDiameter) => {
  return (
    (diameter.meters.estimated_diameter_min +
      diameter.meters.estimated_diameter_max) /
    2
  )
}

const extractCloseApproachData = (closeApproachData: CloseApproachData[]) => {
  return {
    relativeVelocity:
      closeApproachData[0].relative_velocity.kilometers_per_second,
    closeApproachDateFull: closeApproachData[0].close_approach_date_full
  }
}

const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
