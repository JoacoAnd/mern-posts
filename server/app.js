import express from 'express';
import fileUpload from 'express-fileupload';
import postsRoutes from './routes/posts.routes.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url'

// Configuration
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Middlewares
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload"
}));

// Routes
app.use("/posts", postsRoutes);

app.use(express.static(join(__dirname, "../client/build")));

export default app;