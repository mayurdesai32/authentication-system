const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwttoken;
    const verifytoken = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await User.findOne({
      _id: verifytoken._id,
      'tokens.token': token,
    });
    if (!rootUser) {
      throw new Error('user not found');
    } else {
      console.log('right token');
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send('unauthorized token');
    console.log(err);
  }
};
module.exports = authenticate;
