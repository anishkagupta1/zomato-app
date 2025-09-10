require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');

// connect to database
connectDB();

// ❌ Yeh part hata do (Vercel apna listener use karta hai):
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// ✅ Instead, app ko export karo
module.exports = app;
