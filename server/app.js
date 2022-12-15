import express from 'express';
import fileUpload from 'express-fileupload';
import postsRoutes from './routes/posts.routes.js';

// Configuration
const app = express();

// Middlewares
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload"
}));

// Routes
app.use("/posts", postsRoutes);

export default app;