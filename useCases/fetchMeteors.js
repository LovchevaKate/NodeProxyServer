import getMeteors from "../repository/meteorRepository.js";
import mapMeteors from "../helper/meteorHelper.js";

const fetchMeteors = async () => {
  const meteors = await getMeteors();
  const result = await mapMeteors(meteors);
  return result;
};

export default fetchMeteors;
