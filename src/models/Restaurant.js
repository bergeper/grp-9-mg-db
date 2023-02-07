const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  images: [
    {
      url: String,
    },
  ],
  tel: {
    type: Number,
  },
  info: {
    type: String,
  },
  adress: {
    type: String,
  },
  city: {
    type: String,
  },
});

exports.module = mongoose.model("Restaurant", RestaurantSchema);
