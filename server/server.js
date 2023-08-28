// backend/app/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());


const bandwidthController = require('./app/controllers/bandwidthController');

app.post('/adjust-bandwidth', bandwidthController.adjustBandwidth);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
