const express = require('express');
const connectDB = require('./database');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // The front-end URL
    credentials: true, // Allow cookies and other credentials
  }));



const UserController = require('./controllers/User');
app.use('/' , UserController );



const PORT = process.env.PORT || 5000;
connectDB().then(()=>{
    console.log("Database is Connected Successfully");
    app.listen(PORT , ()=>{
        console.log("Server Started Successfully at port 7000")
    })
}).catch((error)=>{
    console.log("Database connection failed " + error.message);
})
