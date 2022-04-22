const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: 'agent'
    // roles available to this proj: admin, agent
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
