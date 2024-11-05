import cors from 'cors';

export const corsOptions = {
    origin: '*', // Allow all origins for simplicity; adjust for production
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

export const corsMiddleware = cors(corsOptions);
