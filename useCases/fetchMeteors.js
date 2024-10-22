import getMeteors from '../repository/meteorRepository.js'
import { mapMeteors, filterMeteors } from '../helper/meteorHelper.js'

const fetchMeteors = async (date, count, wereDangerousMeteors) => {
  const meteors = await getMeteors(date)
  const mappedMeteors = mapMeteors(meteors)
  const filteredMeteors = await filterMeteors(
    mappedMeteors,
    count,
    wereDangerousMeteors
  )
  return filteredMeteors
}

export default fetchMeteors
