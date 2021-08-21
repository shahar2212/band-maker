const Joi = require('joi');//used joi as the server side validation
const mongoose = require('mongoose');
const _ = require('lodash');// has variety of abilities 
///////////////////////////////////////////////////////////////////////

const cardSchema = new mongoose.Schema({//here i decide how the card is gonna look like

    bandName: { type: String, required: true, minlength: 2, maxlength: 255 },
    bandDescription: { type: String, required: true, minlength: 2, maxlength: 1024 },
    bandAddress: { type: String, required: true, minlength: 2, maxlength: 400 },
    bandPhone: { type: String, required: true, minlength: 9, maxlength: 10 },
    bandImage: { type: String, required: true, minlength: 11, maxlength: 1024 },
    mucNumber: { type: String, required: true, minlength: 3, maxlength: 999999999, unique: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, //mongo now knows it has a reference to collection -'users', i add user id so i can make a clear connection between the user who wrote the card
    favorites_user_id: { type: mongoose.Schema.Types.Array, ref: 'User' }
});

const Card = mongoose.model('Card', cardSchema); //mongoose now knows it has a collection called 'cards'

async function generateRandomNumber(Card) { // creates a random number for mucNumber, if its unique it returns the random number

    while (true) {
        let randomNumber = _.random(0, 999999999); //generate number between 0,99999
        let card = await Card.findOne({ mucNumber: randomNumber });
        if (!card) return String(randomNumber);//if there is no match, that means the number is free to use 
    }
}

function validateCard(card) {
    const schema = Joi.object({
        bandName: Joi.string().min(2).max(255).required(),
        bandDescription: Joi.string().min(2).max(1024).required(),
        bandAddress: Joi.string().min(2).max(400).required(),
        bandPhone: Joi.string().min(9).max(10).required().regex(/^0[2-9]\d{7,8}$/),
        bandImage: Joi.string().min(11).max(1024)
    });

    return schema.validate(card);
}

exports.Card = Card;
exports.generateRandomNumber = generateRandomNumber;
exports.validateCard = validateCard;