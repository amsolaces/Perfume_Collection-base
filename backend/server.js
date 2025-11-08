import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import perfumeRoutes from './routes/perfumeRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Perfume API is running',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      perfumes: '/api/perfumes'
    }
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/perfumes', perfumeRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Connect to database
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 API available at http://localhost:${PORT}`);
});
