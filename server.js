const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const foodRoutes = require('./routes/foods');
const orderRoutes = require('./routes/orders');
const recommendationRoutes = require('./routes/recommendations');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to DB
require('./config/db')();

// Routes
app.use('/api/foods', foodRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/recommendations', recommendationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
