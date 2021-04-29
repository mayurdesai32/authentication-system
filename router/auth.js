// require('./db/conn');
const User = require('../models/userSchema');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
router.get('/', (req, res) => {
  res.send('hello from server');
});

router.post('/register', async (req, res) => {
  // res.json({ message: req.body });
  // res.send('hello from routor');
  const { name, email, phone, password, cpassword } = req.body;
  if (!name || !email || !phone || !password || !cpassword) {
    res.status(422).json({ error: 'please filled all field' });
  }
  try {
    const userexit = await User.findOne({ email: email });
    if (userexit) {
      return res.status(422).json({ error: 'Email already Exit' });
    }
    const user = new User({ name, email, phone, password, cpassword });
    await user.save();
    res.status(201).json({ message: 'registor successfully' });
  } catch (err) {
    console.log(err);
  }
});
router.post('/login', async (req, res) => {
  // try {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: 'plz fill all field ' });
  } else {
    const userlogin = await User.findOne({ email: email });
    if (userlogin) {
      const token = await userlogin.generateAuthToken();
      console.log(token);
      res.cookie('jwttoken', token, {
        expires: new Date(Date.now() + 30 * 60 * 1000),
        httpOnly: true,
      });
      // console.log(userlogin);
      const ismatch = await bcrypt.compare(password, userlogin.password);
      if (ismatch) {
        res.status(200).json({ message: 'valid email' });
      }
    } else {
      res.status(401).json({ err: 'invaid email' });
    }
  }
  // } catch (error) {
  //   console.log(error);
  // }
});

///about
router.get('/about', authenticate, (req, res) => {
  console.log('hello');
  res.status(200).json(req.rootUser);
});

///for logout
router.get('/logout', authenticate, async (req, res) => {
  try {
    console.log(req.rootUser);
    req.rootUser.tokens = [];
    await req.rootUser.save();
    res.status(200).clearCookie('jwttoken').json('cookie cleared');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
