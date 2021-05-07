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
    app.get("/players", async (request, response) => {
        await Player.find().then((r) => {
            response.send(r);
        });
    });

    // Get player by id
    app.get("/players/:id", async (request, response) => {
        const id = request.params.id;
        await Player.findById(id).then((r) => {
            response.send(r);
        });
    });
};

// Export the router
module.exports = router;
