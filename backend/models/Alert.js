const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lat: Number,
  lng: Number,
  status: {
    type: String,
    enum: ["new", "accepted", "resolved"],
    default: "new",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Alert", alertSchema);
