import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routers/userRoutes.js';
import productRoutes from './routers/productRoutes.js';
import categoryRoutes from './routers/categoryRoutes.js';
import orderRoutes from './routers/orderRoutes.js';
import cors from 'cors';
import path from 'path';

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Serve static files (uploaded images)
// app.use('/images', express.static(path.join(path.resolve(), 'src/images')));
// app.use('/uploads',express.static("src/images"));

// Routes
app.use('/m2/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, (error) => {
  if (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
  console.log(`Server running at http://localhost:${PORT}`);
});
