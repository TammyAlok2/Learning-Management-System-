import cookieParser from 'cookie-parser';
import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import errorMiddleware from './middlewares/error.middleware.js';
import dotenv from 'dotenv'
import 'dotenv/config'


config();

const app = express();

// Middlewares
// Built-In
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Third-Party
const allowedOrigins = [
             'http://localhost:3000',
             'https://learning-management-system-sandy-seven.vercel.app',
             'https://lms.aloktamrakar.me'
];

// CORS configuration
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps)
    if (!origin) return callback(null, true);
    
    // Check if the origin matches any allowed pattern
    const isAllowed = allowedOrigins.some(allowedOrigin => {
      if (allowedOrigin === undefined || allowedOrigin === 'null') {
        return true;
      }
      // Handle wildcard IP addresses
      if (allowedOrigin.includes('*')) {
        const pattern = new RegExp(allowedOrigin.replace('*', '\\d+'));
        return pattern.test(origin);
      }
      return allowedOrigin === origin;
    });

    if (isAllowed) {
      callback(null, true);
    } else {
      callback(new Error(`Origin ${origin} not allowed by CORS`));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  maxAge: 600 // Increase maxAge to reduce preflight requests
}));
app.use(morgan('dev'));
app.use(cookieParser());

// Server Status Check Route
app.get('/ping', (_req, res) => {
  res.send('Pong');
});

// Import all routes
import userRoutes from './routes/user.routes.js';
import courseRoutes from './routes/course.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import miscRoutes from './routes/miscellaneous.routes.js';

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.use('/api/v1', miscRoutes);

// Default catch all route - 404
app.all('*', (_req, res) => {
  res.status(404).send('OOPS!!! 404 Page Not Found');
});

// Custom error handling middleware
app.use(errorMiddleware);






export default app;
