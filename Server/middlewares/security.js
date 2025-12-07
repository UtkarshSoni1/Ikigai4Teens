import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import xssClean from 'xss-clean';

/**
 * Apply comprehensive security middlewares to the Express app
 * @param {Object} app - Express application instance
 */
export const applySecurity = (app) => {
    // Helmet: Set security HTTP headers
    app.use(helmet());

    // Disable x-powered-by header to hide Express fingerprint
    app.disable('x-powered-by');

    // MongoDB Sanitization: Prevent NoSQL injection
    app.use(mongoSanitize());

    // XSS Protection: Clean user input to prevent XSS attacks
    app.use(xssClean());
};
