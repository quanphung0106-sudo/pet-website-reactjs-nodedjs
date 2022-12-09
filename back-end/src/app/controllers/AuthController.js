const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendEmail } = require('../configMailer/mailer');
const Token = require('../models/Token');
const User = require('../models/User');
const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || 'http://localhost:8808';
const CLIENT_ENDPOINT = process.env.CLIENT_ENDPOINT || 'http://localhost:3002';

//[POST]: /api/auth/login
const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user === null) return res.status(404).json('Account does not exist');
    if (user) {
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (user.activeAccount === false) return res.status(404).json('Please active your account.');
      if (!validPassword) return res.status(404).json('Wrong password!');
      const { password, isAdmin, _id, activeAccount, ...others } = user._doc;
      return res.status(200).json({ ...others });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
    process.env.JWT,
    {
      expiresIn: '30m',
    },
  );
};

//[POST]: /api/auth/register
const userRegister = async (req, res) => {
  try {
    const usernameDB = await User.findOne({ username: req.body.username });
    const emailDB = await User.findOne({ email: req.body.email });

    console.log({ usernameDB, emailDB });
    const saltRounds = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    if (usernameDB || emailDB) return res.status(404).json('Username or Email exists. Please try another!');
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });
    const activateToken = generateAccessToken(newUser);
    const newToken = await new Token({
      userId: newUser._id,
      activateToken: activateToken,
    });
    await newUser.save();
    await newToken.save();
    sendEmail(
      newUser,
      'Welcome to my website!!',
      `
      <h1>Please click this link to active your account!</h1>
      <a href="${CLIENT_ENDPOINT}/active-account/?token=${newToken.activateToken}">Active your account</a>
      `,
    );
    return res.status(200).json(newUser);
  } catch (err) {
    return res.status(500).json(err);
  }
};

//[POST]: /api/auth/token
const activeAccount = async (req, res) => {
  try {
    const token = await Token.findOne({ activateToken: req.body.token });
    console.log({ token: token.activateToken, requestToken: req.body.token });
    if (req.body.token === token.activateToken) {
      await User.findOneAndUpdate(
        { _id: token.userId },
        {
          activeAccount: true,
        },
      );
      res.status(200).json('Your account has been activated.');
    } else {
      res.status(404).json('Something wrong happen!');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const getToken = async (req, res) => {
  try {
    const token = await Token.find();
    res.status(200).json(token);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteTokens = async (req, res) => {
  try {
    await Token.remove();
    res.status(200).json('All tokens have been deleted.');
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  userLogin,
  userRegister,
  getToken,
  deleteTokens,
  activeAccount,
};
