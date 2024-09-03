const mongoose = require('mongoose');

const coreMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  linkedin: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },  // Add password field
  resetPasswordToken: { type: String, default: null },
  resetPasswordExpires: { type: Date, default: null },
});

module.exports = mongoose.model('CoreMember', coreMemberSchema);
