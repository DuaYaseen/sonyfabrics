const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

// Real MongoDB URI
// Correct MongoDB URI
const mongoURI = 'mongodb+srv://duayaseenvadal:EB5PImfFH5BJxzmx@sony-cluster.otst4sw.mongodb.net/sony-fabrics?retryWrites=true&w=majority&appName=Cluster0';


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Contact form schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  contact: String,
  pricing: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// POST route to handle form submissions
app.post('/api/contact', async (req, res) => {
    const { name, email, address, contact, pricing } = req.body;
  
    try {
      const newContact = new Contact({ name, email, address, contact, pricing });
      await newContact.save();
      res.status(201).send('Message saved successfully');
    } catch (error) {
      console.error('Error saving message:', error);
      res.status(500).send('Error saving message');
    }
  });
  
  

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
