import { ZodError } from 'zod';

/**
 * Returns an express middleware that validates req.body against a Zod schema
 * @param {ZodSchema} schema
 */
export const validate = (schema) => (req, res, next) => {
  try {
    const parsed = schema.parse(req.body);
    // replace body with parsed (useful for transforms)
    req.body = parsed;
    return next();
  } catch (err) {
    if (err instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: err.errors
      });
    }
    return next(err);
  }
};
