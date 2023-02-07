const User = require("../models/User");

exports.getUserById = async (req, res, next) => {
  return res.send("Hello user by ID :D").status(200);
  // on return { password: false }
  /*
  const userId = await User.findOne({
    {
      "ObjectId": "Per"
    }, {
      password: false
    }
  })
  
  */
  // if (!restaurantId) return res.sendStatus(404);
};

exports.createUser = async (req, res) => {
  // return res.send("Hello created User :D").status(201);
  return res
    .setHeader("Location", "http:localhost:5000/api/v1/users/123213213")
    .status(200)
    .json({
      data: {
        name: "Per",
        lastname: "Berge",
      },
      password: false,
    }); // do not return password
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
