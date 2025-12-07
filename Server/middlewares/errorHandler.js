// Global error handling middlewares (ES modules)

/**
 * Handle unknown routes (404)
 */
export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Not Found - ${req.originalUrl}`
  });
};

/**
 * Central error handler
 */
export const errorHandler = (err, req, res, next) => {
  // Log the error for server-side diagnostics
  console.error(err && err.stack ? err.stack : err);

  const statusCode = err && err.status ? err.status : 500;
  const response = {
    success: false,
    message: err && err.message ? err.message : 'Internal Server Error'
  };

  if (process.env.NODE_ENV === 'development') {
    response.stack = err && err.stack ? err.stack : undefined;
  }

  res.status(statusCode).json(response);
};
