import getMeteors from "../repository/meteorRepository.js";

const fetchMeteors = async () => {
  let result = await getMeteors();

  return Object.values(result).flatMap((meteors) =>
    meteors.map((item) => ({
      id: item.id,
      name: item.name,
      diameter:
        (item.estimated_diameter.meters.estimated_diameter_min +
          item.estimated_diameter.meters.estimated_diameter_max) /
        2,
      is_potentially_hazardous_asteroid: item.is_potentially_hazardous_asteroid,
      close_approach_date_full:
        item.close_approach_data[0].close_approach_date_full,
      relative_velocity:
        item.close_approach_data[0].relative_velocity.kilometers_per_second,
    }))
  );
};

export default fetchMeteors;
