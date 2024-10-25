import getMeteors from '../repository/meteorRepository.js'
import { mapMeteors, filterMeteors } from '../helper/meteorHelper.js'

const fetchMeteors = async (date: string, count: string, wereDangerousMeteors: string) => {
  const meteors = await getMeteors(date)
  const mappedMeteors = mapMeteors(meteors)
  const filteredMeteors = filterMeteors(
    mappedMeteors,
    count,
    wereDangerousMeteors
  )
  return filteredMeteors
}

export default fetchMeteors
