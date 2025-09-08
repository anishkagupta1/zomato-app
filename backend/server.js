// start server
require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');

// connect to database
connectDB();

// Vercel apna PORT deta hai environment variable se
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
