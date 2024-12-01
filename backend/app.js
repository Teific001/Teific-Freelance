const express = require('express');
const connectDB = require('./database');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL, // The front-end URL
    credentials: true, // Allow cookies and other credentials
}));

// Health check route
app.get('/health', (req, res) => {
    res.status(200).send('Server is running');
});

const UserController = require('./controllers/User');
app.use('/', UserController);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    console.log("Database is Connected Successfully");
    app.listen(PORT, () => {
        console.log(`Server Started Successfully at port ${PORT}`);
    });
}).catch((error) => {
    console.log("Database connection failed " + error.message);
});
