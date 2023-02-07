const express = require("express");
const router = express.Router();
const {
  getAllResturants,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurantsById,
} = require("../controllers/restaurantController");

// Create Routes

router.get("/", getAllResturants);
router.get("/:restaurantId", getRestaurantsById);
router.post("/", addRestaurant);
router.put("/:restaurantId", updateRestaurant);
router.delete("/:restaurantId", deleteRestaurant);

module.exports = router;
