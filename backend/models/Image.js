const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  Image_Url: { type: String, required: true },
  public_id: { type: String, required: true }
});

module.exports = mongoose.model("Image", imageSchema);
