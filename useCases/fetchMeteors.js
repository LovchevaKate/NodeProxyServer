import getMeteors from "../repository/meteorRepository.js";
import { mapMeteors, filterMeteors } from "../helper/meteorHelper.js";

const fetchMeteors = async (date, count, wereDangerousMeteors) => {
  let meteors = await getMeteors(date);
  let mappedMeteors = mapMeteors(meteors);
  let filteredMeteors = await filterMeteors(
    mappedMeteors,
    count,
    wereDangerousMeteors
  );
  return filteredMeteors;
};

export default fetchMeteors;
