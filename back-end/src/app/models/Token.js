const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
  userId: {
    type: String,
  },
  activateToken: {
    type: String,
  },
});

module.exports = mongoose.model("Token", TokenSchema);
