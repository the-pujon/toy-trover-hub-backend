const userSchema = require("../model/user.schema");
const User = require("../model/user.schema");

/**
 * (Create)
 * for creating new user
 */
const createUser = async (req, res) => {
  try {
    const existingUser = await userSchema.findOne({ email: req.body.email });

    if (!existingUser) {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        image: req.body.image,
      });
      await newUser.save();
      res.status(200).json(newUser);
    } else {
      res.status(200).send({ message: "user already exist" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * (read)
 * for getting all users
 */
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * (read)
 * for getting single users
 */
const getSingleUsers = async (req, res) => {
  try {
    const singleUser = await User.findOne({ email: req.params.email });
    console.log("email" + req.params.email);
    console.log("singleuser:" + singleUser);
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * (Update)
 * for updating single users
 */
const updateUser = async (req, res) => {
  try {
    const userUpdate = await User.findOne({ email: req.params.email });
    userUpdate.name = req?.body?.name;
    userUpdate.email = req?.body?.email;
    userUpdate.password = req?.body?.password;
    userUpdate.image = req?.body?.image;
    userUpdate.save();
    res.status(200).json(userUpdate);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * (delete)
 * for delete single users
 */
const deleteUser = async (req, res) => {
    console.log("delete")
  try {
    const userDelete = await User.deleteOne({ email: req.params.email });
    res.status(200).json(userDelete);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllUsers,
  getSingleUsers,
  updateUser,
  deleteUser,
  createUser,
};
