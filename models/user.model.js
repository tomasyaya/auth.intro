const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = model("User", UserSchema);
