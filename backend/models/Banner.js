const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema({
  Banner_Url: { type: String, required: true },
  public_id: { type: String, required: true }
});

module.exports = mongoose.model("Banner", BannerSchema);
