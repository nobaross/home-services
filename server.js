const express = require('express');
const routes = require('./routes/routes');  // Import the routes file


const app = express();

// Mount the routes at the root path of the app
app.use('/', routes(express));  // Pass the express object to the routes function

// Start the server on port 8080
const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}. Works correctly.`);
});
