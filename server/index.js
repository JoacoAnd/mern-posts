// Imports
import config from './config.js';
import connectDB from './db.js';
import app from './app.js';

// Configuration
const port = config.appConfig.port;

// Server
connectDB();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});