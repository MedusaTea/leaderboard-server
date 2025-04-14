import express from 'express'

const app = express()
app.use(express.json())

// Global error handler
function errorHandler(err, req, res, next) {
  console.error(err); // Log the error for debugging

  // Check if the error is a known operational error
  if (err.isOperational) {
    return res.status(err.statusCode || 500).json({
      message: err.message || 'An unexpected error occurred.',
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }), // Optionally include stack in dev mode
    });
  }

  // For unexpected programming errors, don't expose sensitive details
  res.status(500).json({
    message: 'Something went wrong. Please try again later.',
  });
}

// Use the error handler in the app
app.use(errorHandler);

export default app
