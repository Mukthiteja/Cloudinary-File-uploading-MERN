const mongoose = require("mongoose");

const SponsorSchema = new mongoose.Schema({
  Sponsor_Url: { type: String, required: true },
  public_id: { type: String, required: true }
});

module.exports = mongoose.model("Sponsor", SponsorSchema);
