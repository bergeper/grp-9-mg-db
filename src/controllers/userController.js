const User = require("../models/User");

exports.getUserById = async (req, res, next) => {
  return res.send("Hello user by ID :D").status(200);
  // if (!restaurantId) return res.sendStatus(404);
};

exports.createUser = async (req, res) => {
  return res.send("Hello created User :D").status(201);
  // if (!restaurantId) return res.sendStatus(404);
};

exports.deleteUser = async (req, res) => {
  return res.send("Deleted user :(").status(204);
  // If (!userId) return.res.sendStatus(400)
};

exports.updateUser = async (req, res) => {
  return res.send("Updated User :)").status(201);
  // return.res.sendStatus(400)
};
