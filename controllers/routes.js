const mongoose = require("mongoose");
const Player = require("../models/players");

// Router
const router = (app) => {
    app.get("/", (request, response) => {
        response.send({
            message: "Node.js and Express REST API",
        });
    });

    // Get all players
    app.get("/players", (request, response) => {
        Player.find().then((players) => {
            response.send(players);
        });
    });

    // Get player by id
    app.get("/players/:id", (request, response) => {
        const id = request.params.id;
        let query = { _id: id };
        Player.find(query).then((players) => {
            response.send(players);
        });
    });
};

// Export the router
module.exports = router;
