import HttpError from "./httpError";

const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message || "An error occurred",
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};

export default errorHandler;
