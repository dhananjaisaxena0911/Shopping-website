import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import favRoutes from './routes/favRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure uploads/products folder exists
const uploadDir = path.join(__dirname, 'uploads/products');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer configuration (optional if you're using uploads later)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});
const upload = multer({ storage });

// Serve static files from uploads/products
app.use(
    '/uploads/products',
    express.static(path.join(__dirname, 'uploads/products'), {
      setHeaders: (res, filePath) => {
        if (filePath.endsWith('.png')) {
          res.setHeader('Content-Type', 'image/png+xml');
        }
        if (filePath.endsWith('.xml')) {
          res.setHeader('Content-Type', 'application/xml');
        }
        if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
          res.setHeader('Content-Type', 'image/jpeg');
        }
      },
    })
  );

// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart',cartRoutes);
app.use('/api/favourite',favRoutes);
// Connect to DB and start server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
