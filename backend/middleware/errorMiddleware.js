// Handles routes that don't exist
const notFound = (req, res, next) => {
  const error = new Error(`Route not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Catches every error passed via next(error) or thrown in an async route
const errorHandler = (err, req, res, next) => {
  let statusCode =
    res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  let message = err.message;

  // Mongoose bad ObjectId (e.g GET /api/users/123 with invalid id format)
  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }

  // Mongoose Validate key error (e.g email already exists)
  if (err.code === 11000) {
    statusCode = 400;
    message: `Duplicate value entered for ${Object.keys(err.keyValue)} field`;
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { notFound, errorHandler };
