'use strict';
let express = require('express');

//const PORT = 3000;
let app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
    if(req.headers["x-forwared-proto"] === "http") {
        next();
    } else {
        res.redirect("http://" + req.hostname + req.url);
    }
});
// Create our app
app.use(express.static('public'));
app.listen(PORT, () => console.log(`Express server is up on port ${PORT}`));