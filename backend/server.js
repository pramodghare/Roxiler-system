 const express = require('express');

const bodyParser = require('body-parser');

const connectDB = require('./config/db');

const transactionRoutes = require('./routes/transactions');

const app = express();

connectDB();

app.use(bodyParser.json());

app.use('/api', transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
