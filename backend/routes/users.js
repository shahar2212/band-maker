const express = require('express');
const { valid } = require('joi');
const router = express.Router();
const { User, validate } = require('../models/user.js');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const auth = require('../middleware/auth');
///////////////////////////////////////////

router.get('/me', auth, async (req, res) => {//gives all the details about the logged in user
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);

})

router.post('/', async (req, res) => {
    //if error then return status 400 and error details
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //if email exists then return status 400 and error details
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already register.')

    //encrypting the password with bcrypt, and sending back the other harmless user details. 
    user = new User(req.body);
    const salt = await bcrypt.genSalt(10); //salt stands for the key that we use to verify the password
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.send(_.pick(user, ['_id', 'name', 'email', 'firstInstrument', 'secondInstrument',]));

});

module.exports = router;
