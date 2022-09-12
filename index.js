'use strict';

require('dotenv').config();
const server = require('./server');
const { db } = require('./models/index');

// CONNECTING TO THE DB: 
db.sync().then(() => {
  server.start(process.env.PORT || 3003);
}).catch(console.error)