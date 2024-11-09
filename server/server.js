const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const registerRoute = require('./routes/registration'); // Import the registration route
const loginRoute = require('./routes/login'); // Import the login route
const profileRoute = require('./routes/profile'); 
dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/practice')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

// Routes
app.use('/register', registerRoute); // Registration route
app.use('/login', loginRoute); // Login route
app.use('/profile', profileRoute); 
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
