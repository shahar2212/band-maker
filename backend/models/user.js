const Joi = require('joi');//used joi as the server side validation
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
//////////////////////////////////////////////////////////////////////

const userSchema = new mongoose.Schema({

    name: { type: String, required: true, minlength: 2, maxlength: 255 },
    email: { type: String, required: true, minlength: 6, maxlength: 255, unique: true },
    password: { type: String, required: true, minlength: 6, maxlength: 1024 },
    firstInstrument: { type: String, required: true },
    secondInstrument: { type: String, required: true },
    area: { type: String, required: true },
    about: { type: String, minlength: 6, required: true },
    band: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now }
});

userSchema.methods.generateAuthToken = function () {// adds a method to userScheme, gives it the ability to create authentication token
    const token = jwt.sign({ _id: this._id, band: this.band }, config.get('jwtKey'));
    return token;
};

const User = mongoose.model('User', userSchema);//mongoose now knows it has a collection called 'users'

function validateUser(user) {

    const schema = Joi.object({
        name: Joi.string().min(2).max(255).required(),
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required(),
        ////complete later
        firstInstrument: Joi.string().required(),
        secondInstrument: Joi.string().required(),
        area: Joi.string().required(),
        about: Joi.string().min(10).required(),
        band: Joi.boolean().required()
    })

    return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser