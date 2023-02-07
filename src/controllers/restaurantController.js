const Restaurant = require("../models/Restaurant");

exports.getAllResturants = async (req, res, next) => {
  return res.send("Wow so many resturants").status(200);
  // if (!restaurant) return.res.sendStatus(404)
};

exports.getRestaurantsById = async (req, res, next) => {
  return res.send("My one and only special resturant").status(200);
  // if (!restaurantId) return res.sendStatus(404);
};

exports.addRestaurant = async (req, res, next) => {
  return res.send("Yey new restaurant!").status(201);
  // if (!name) return.res.sendStatus(400)
};

exports.updateRestaurant = async (req, res, next) => {
  return res.send("Wow new menu!").status(201);
  // return.res.sendStatus(400)
};

exports.deleteRestaurant = async (req, res, next) => {
  return res.send("Bye bye :( ").status(204);
  // IF user tries to remove restaurant return (403)
  // IF admin deletes restaurant (204)
};
