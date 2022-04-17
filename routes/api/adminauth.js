const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const Admin = require('../../models/Admin');

const { check, validationResult } = require('express-validator');
// @route   GET api/auth
// @desc    Get admin by token
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id).select('-password');
    res.json(admin);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
// @route   POST api/auth
// @desc    Authenticate user and get token
// @access  Public
router.post(
  '/',

  check('email', 'Email should be valid').isEmail(),
  check('password', 'Password is required').exists(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      console.log('in adminauth');
      // see if admin exist
      let user = await Admin.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      if (password != user.password) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }
      req.session.authentication = true;
      req.session.mail = email;

      // return jsonwebtoken
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
