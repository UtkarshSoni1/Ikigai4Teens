import rateLimit from 'express-rate-limit';

// Rate limiter for authentication routes
// 15-minute window, max 5 requests
export const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5,
    message: 'Too many authentication attempts, please try again later.',
    standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
    legacyHeaders: false, // Disable `X-RateLimit-*` headers
    skip: (req) => req.method === 'GET', // Don't rate limit GET requests
});

// Rate limiter for API routes
// 1-minute window, max 100 requests
export const apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 10,
    message: 'Too many API requests, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});
