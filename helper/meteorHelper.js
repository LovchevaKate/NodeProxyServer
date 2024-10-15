const mapMeteors = async (data) => {
  return Object.values(data).flatMap((meteors) =>
    meteors.map((item) => {
      const { relative_velocity, close_approach_date_full } =
        extractCloseApproachData(item.close_approach_data);

      return {
        id: item.id,
        name: item.name,
        diameter: getDiameter(item.estimated_diameter),
        is_potentially_hazardous_asteroid:
          item.is_potentially_hazardous_asteroid,
        close_approach_date_full,
        relative_velocity,
      };
    })
  );
};

const getDiameter = (diameter) => {
  return (
    (diameter.meters.estimated_diameter_min +
      diameter.meters.estimated_diameter_max) /
    2
  );
};

const extractCloseApproachData = (closeApproachData) => {
  if (!closeApproachData || closeApproachData.length === 0) {
    return { relative_velocity: null, close_approach_date_full: null };
  }

  return {
    relative_velocity:
      closeApproachData[0].relative_velocity.kilometers_per_second,
    close_approach_date_full: closeApproachData[0].close_approach_date_full,
  };
};

export default mapMeteors;
