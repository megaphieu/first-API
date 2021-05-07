const mongoose = require("mongoose");
const Player = require("../models/players");

// mongoose
//     .connect("mongodb://localhost:27017/first-api", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => console.log("successfully connected to mongodb!"))
//     .catch((err) => console.log("error:", err));


// Router
const router = (app) => {
    app.get("/", (request, response) => {
        response.send({
            message: "Node.js and Express REST API",
        });
    });

    // Get all players
    app.get("/players", (request, response) => {
        Player.find().then(players => console.log(players))
    });

    // Get 1 player
    app.get("/players/:id", (request, response) => {
        const id = request.params.id;
        Player.find().then(players => console.log(players))
    });
};

// Export the router
module.exports = router;
