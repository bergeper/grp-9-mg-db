const express = require("express");
const {
  getAllReviewsForRestaurant,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");
const router = express.Router();

// Create Routes

router.get("/:restaurantId/reviews", getAllReviewsForRestaurant);
router.post("/", createReview);
router.put("/:reviewId", updateReview);
router.delete("/:reviewId", deleteReview);

module.exports = router;
