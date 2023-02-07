const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    maxlength: 200,
  },
  profilePicture: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
