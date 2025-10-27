const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const dbconnect = require("./config/db.js");
const userRoutes = require('./routes/user.route.js');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
    
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbconnect();

// Routes
app.use('/api/users', userRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

