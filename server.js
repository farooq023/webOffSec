const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

app.use('/api/results', require('./routes/api/results'));
app.use('/api/agents', require('./routes/api/agents'));

app.use('/api/sendscan', require('./routes/api/sendscan'));
app.use('/api/fetchscan', require('./routes/api/fetchscan'));

app.use('/api/senddns', require('./routes/api/senddns'));
app.use('/api/fetchdns', require('./routes/api/fetchdns'));

app.use('/api/sendssl', require('./routes/api/sendssl'));
app.use('/api/fetchssl', require('./routes/api/fetchssl'));

app.use('/api/fetchgen', require('./routes/api/fetchgen'));

app.use('/api/fetchallassessment', require('./routes/api/fetchallassessment'));


// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
