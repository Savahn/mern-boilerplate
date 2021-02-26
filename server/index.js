import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import { config } from 'dotenv';

import courseRoutes from './routes/courses.js';

// dotenv.config
// Amazing npm package for abstracting secret values to a .env file
// Run this function near the top of your code to parse values in your .env file
// and set them into process.env
config();

// API initialization
const app = express();

// bodyParser will parse the body of any HTTP request
// and add the corresponding pieces in the request object
// i.e. body goes to request.body, query parameters in the url go to request.query
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// CORS (Cross Origin Resource Sharing Protocols)
// Adds necessary HTTP headers to all requests incoming and outgoing to allow
// for cross origin data sharing
// See https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS for a more detailed explanation of the CORS mechanism
app.use(cors());

// Setup API routes
app.use('/courses', courseRoutes);

// Add your connection string here
// mongodb+srv://<user>:<password>@plancluster1.ft3fu.mongodb.net/<database>?retryWrites=true&w=majority
const CONNECTION_URL = process.env.CONNECTION_URL || '';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch(error => console.log(error.message));

mongoose.set('useFindAndModify', false);
