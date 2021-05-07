const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    _id: String,
    pcoin: Number,
});

const Player = mongoose.model("players", PlayerSchema);
module.exports = Player;
