const User = require('../models/User');

//[POST]: /api/auth/login
const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      console.log(user);
      if (req.body.password !== user.password) {
        res.status(404).json('Wrong password');
      } else {
        res.status(200).json(user);
      }
    } else {
      res.status(404).json('User không tồn tại');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  userLogin,
};
