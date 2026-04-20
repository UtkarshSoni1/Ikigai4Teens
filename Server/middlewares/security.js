import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import xssFilters from 'xss-filters';

const sanitizeXssValue = (value) => {
    if (typeof value === 'string') {
        return xssFilters.inHTMLData(value).trim();
    }

    if (Array.isArray(value)) {
        return value.map(sanitizeXssValue);
    }

    if (value && typeof value === 'object') {
        return Object.fromEntries(
            Object.entries(value).map(([key, nestedValue]) => [key, sanitizeXssValue(nestedValue)])
        );
    }

    return value;
};

const sanitizeMutableRequestData = (req, res, next) => {
    ['body', 'params', 'headers'].forEach((key) => {
        if (req[key]) {
            req[key] = mongoSanitize.sanitize(req[key]);
        }
    });

    next();
};

const sanitizeMutableXssData = (req, res, next) => {
    ['body', 'params'].forEach((key) => {
        if (req[key]) {
            req[key] = sanitizeXssValue(req[key]);
        }
    });

    next();
};

/**
 * Apply comprehensive security middlewares to the Express app
 * @param {Object} app - Express application instance
 */
export const applySecurity = (app) => {
    // Helmet: Set security HTTP headers
    app.use(helmet());

    // Disable x-powered-by header to hide Express fingerprint
    app.disable('x-powered-by');

    // Express 5 exposes req.query as a getter-only property, so sanitize only mutable request objects.
    app.use(sanitizeMutableRequestData);

    // xss-clean also mutates req.query, so sanitize only mutable request objects here too.
    app.use(sanitizeMutableXssData);
};
