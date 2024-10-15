import getMeteors from "../repository/meteorRepository.js";

const fetchMeteors = async (date, count, wereDangerousMeteors) => {
  let meteors = await getMeteors(date);
  let mappedMeteors = await mapMeteors(meteors);
  let filteredMeteors = await filterMeteors(
    mappedMeteors,
    count,
    wereDangerousMeteors
  );
  return filteredMeteors;
};

const mapMeteors = async (meteorsData) => {
  return Object.values(meteorsData).flatMap((meteors) =>
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

const filterMeteors = async (meteors, count, wereDangerousMeteors) => {
  if (wereDangerousMeteors != null) {
    const isWereDangerousMeteors = wereDangerousMeteors === "true";
    meteors = meteors.filter(
      (meteor) =>
        meteor.is_potentially_hazardous_asteroid === isWereDangerousMeteors
    );
  }
  if (count && !isNaN(count) && count > 0) {
    meteors = meteors.slice(0, parseInt(count));
  }

  return meteors;
};

export default fetchMeteors;
