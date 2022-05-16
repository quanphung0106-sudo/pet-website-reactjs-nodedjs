const User = require('../models/User');

//create an order
//[POST]: /api/item/
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get all users
//[GET]: /api/item/
const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete all users
//[DELETE]: /api/users/
const deleteAllUsers = async (req, res) => {
  try {
    const users = await User.remove();
    res.status(200).json('Deleted all users');
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  deleteAllUsers,
};
