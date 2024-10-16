const validateRequest = (schema, property = "body") => {
  return (req, res, next) => {
    console.log(property);
    console.log(req[property]);
    console.log(property === "query" ? req.query : req.body);
    const { error } = schema.validate(req[property], { abortEarly: false });

    if (error) {
      return res.status(400).json({
        status: "error",
        message: "Validation failed",
        details: error.details.map((detail) => ({
          message: detail.message,
          path: detail.path,
        })),
      });
    }

    next();
  };
};

export default validateRequest;
