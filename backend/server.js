const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const experiencesRouter = require('./routes/experiences');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/experiences', experiencesRouter);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
