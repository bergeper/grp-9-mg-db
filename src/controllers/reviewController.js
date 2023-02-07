const Review = require("../models/Review");

exports.getAllReviewsForRestaurant = async (req, res) => {
  return res.send("ALL reviews from a restaurant").status(200);
  // if (!restaurantId) return res.sendStatus(404);
};

exports.createReview = async (req, res) => {
  return res.send("A review is created").status(201);
  // if (!name) return.res.sendStatus(400)
};

exports.updateReview = async (req, res) => {
  return res.send("You updated a review").status(201);
  // return.res.sendStatus(400)
};

exports.deleteReview = async (req, res) => {
  return res.send("You deleted a review :(((").status(204);
  // If (!userId) return.res.sendStatus(400)
};
