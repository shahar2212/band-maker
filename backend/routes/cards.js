const express = require('express');
const _ = require('lodash');
const { Card, validateCard, generateRandomNumber } = require('../models/card');
const auth = require('../middleware/auth');
const { Router } = require('express');
const router = express.Router();
///////////////////////////////////////////////////////////////////////////////

router.put('/favorites/:user_id/:card_id', auth, async (req, res) => {//stores at cards, the id of the logged in user so we can display later all cards where the user saved as favorites
    let card = await Card.findOneAndUpdate({ _id: req.params.card_id }, { $push: { favorites_user_id: [req.params.user_id] } })
    if (!card) return res.status(404).send('The card with the given ID not found.');
    res.send(card);
})

router.get('/favorites/:user_id', auth, async (req, res) => {//getting all the cards with the user id saved in them
    const cards = await Card.find({ favorites_user_id: req.params.user_id });
    res.send(cards);
})

router.delete('/favorites/:user_id/:card_id', auth, async (req, res) => {//deleting the user id from the card the user wants to remove from favorites
    let card = await Card.findOneAndUpdate({ _id: req.params.card_id }, { $pull: { favorites_user_id: { $in: [req.params.user_id] } } })
    res.send(card);
})

router.get('/discover', async (req, res) => {//gets all the cards
    const cards = await Card.find();
    res.send(cards);
})

router.get('/my-bands', auth, async (req, res) => {//get all user cards

    if (!req.user.band) return res.status(401).send('Access denied.');
    const cards = await Card.find({ user_id: req.user._id });
    res.send(cards);
})

router.delete('/:id', auth, async (req, res) => {//delete card endpoint

    const card = await Card.findOneAndRemove({ _id: req.params.id, user_id: req.user._id });
    if (!card) return res.status(404).send('The card with the given ID not found.');

    res.send(card);
})

//the- ':id' is a parameter
router.put('/:id', auth, async (req, res) => {//edit card endpoint

    const { error } = validateCard(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let card = await Card.findOneAndUpdate({ _id: req.params.id, user_id: req.user._id }, req.body);
    if (!card) return res.status(404).send('The card with the given ID not found.');

    card = await Card.findOne({ _id: req.params.id, user_id: req.user._id });
    res.send(card);
});

//the ':' stands for variable.
router.get('/:id', auth, async (req, res) => {//my cards endpoint

    //searching for a card id that is equal to the id in the params, and checks that the user id on the card is equal to the user logged in
    const card = await Card.findOne({ _id: req.params.id, user_id: req.user._id });
    if (!card) return res.status(404).send('The card with the given ID not found.');//if no match, card not found.
    res.send(card);

})

router.post('/', auth, async (req, res) => {//post card

    const { error } = validateCard(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let card = new Card({

        bandName: req.body.bandName,
        bandDescription: req.body.bandDescription,
        bandAddress: req.body.bandAddress,
        bandPhone: req.body.bandPhone,
        bandImage: req.body.bandImage ? req.body.bandImage : 'https://cdn.pixabay.com/photo/2019/11/29/12/37/ape-4661232_960_720.jpg',
        mucNumber: await generateRandomNumber(Card),
        user_id: req.user._id
    });

    let post = await card.save();
    res.send(post);
})

module.exports = router;