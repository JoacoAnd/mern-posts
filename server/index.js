// Imports
import express from 'express';
import postsRoutes from './routes/posts.routes.js';
import config from './config.js';
import connectDB from './db.js';

// Configuration
const port = config.appConfig.port;
const app = express();

// Middlewares
app.use("/posts", postsRoutes);


// Server
connectDB();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});