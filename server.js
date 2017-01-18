'use strict';
let express = require('express');

const PORT = 3000;

// Create our app
let app = express();
app.use(express.static('public'));
app.listen(PORT, () => console.log(`Express server is up on port ${PORT}`));