const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const Admin = require('../../models/Admin');

const { check, validationResult } = require('express-validator');

// @route   GET api/auth
// @desc    Get user by token
// @access  Public

router.get('/', auth, async (req, res) => {
  try {
    const user = await Admin.findById(req.user.id).select('-password');
    res.json(user);
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
  
// @route   POST api/auth
// @desc    Authenticate user and get token
// @access  Public
router.post('/:email/:password',

  async (req, res) => {
    console.log("admin authh api called");

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.params.email;
    let password = req.params.password;

    // console.log(email+" "+password);

    try {
      // see if user exist
      let user = await Admin.findOne({ email });
      
      if (!user) {
        return res
          .status(400)
          .json({ errors: "Invalid entry" });
      }

    //   const isMatch = await bcrypt.compare(password, user.password);
      const isMatch = (password == user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: "Invalid entry" });
      }

      req.session.authentication = true
      req.session.mail = email;

      // return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
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