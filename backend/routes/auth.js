const Joi = require('joi');
const bcrypt = require('bcrypt');
const { User } = require('../models/user');
const express = require('express');
const router = express.Router();
/////////////////////////////////


router.post('/', async (req, res) => {

    //validates the email and password before we send a req to mongoDB
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //checks if the email input is the same with the db, if not sends error
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email or password.');

    //checks if the password input is the same with the db, if not sends error
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password.')

    //reaches this line only if none of the above error occurred
    res.json({ token: user.generateAuthToken() })
})

function validate(req) {

    const schema = Joi.object({
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required()
    });
    return schema.validate(req);
}

module.exports = router;