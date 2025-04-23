import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cors from 'cors';
app.use(cors());
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/your_db_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Mongoose schema
const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});
const User = mongoose.model('User', UserSchema);

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  
  if (!user) {
    // register new user
    user = new User({ email, password });
    await user.save();
    return res.json({ message: 'User registered and logged in!' });
  }

  if (user.password === password) {
    return res.json({ message: 'Login successful!' });
  }

  res.status(400).json({ message: 'Incorrect password.' });
});

// Start server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));

