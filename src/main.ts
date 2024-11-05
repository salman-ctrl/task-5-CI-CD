import express from 'express';
import mongoose from 'mongoose';
import authorRoutes from './routes/author-routes';
import bookRoutes from './routes/book-routes';
import { errorMiddleware } from './middlewares/error-middleware';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', authorRoutes);
app.use('/api', bookRoutes);
app.use(errorMiddleware);

// Memastikan MONGO_URI ada dan bukan string kosong
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
    console.error('MONGO_URI tidak didefinisikan di file .env');
    process.exit(1); // Keluar dari proses jika MONGO_URI tidak ada
}

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Koneksi ke database berhasil');
        app.listen(PORT, () => {
            console.log(`Server berjalan di http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Gagal terhubung ke database:', err.message);
    });
