// Require packages and set the port
const express = require("express");
const port = 3002;
const bodyParser = require("body-parser");
const routes = require("./controllers/routes");
const app = express();

// Mongodb
const mongoose = require("mongoose");
const Player = require("./models/players");

mongoose
    .connect("mongodb://localhost:27017/first-api", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("successfully connected to mongodb"))
    .catch((err) => console.log("error:", err));

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

routes(app);

// Start the server
const server = app.listen(port, (error) => {
    console.log(
        `Server listening on port: http://localhost:${server.address().port}/`
    );
    if (error) return console.log(`Error: ${error}`);
});
