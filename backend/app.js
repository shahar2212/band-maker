const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const cors = require('cors');
//Routes:
const users = require('./routes/users');
const auth = require('./routes/auth');
const cards = require('./routes/cards');
////////////////////////////////////////

//copy paste from mongo doc, connection to mongoDB
mongoose.connect('mongodb://localhost/gang-band', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => console.log('MongoDB Connected'));

app.use(cors());
app.use(express.json());//convert income into literal ob, and outcome to json

app.use('/api/users', users);// when calling '/api/users', performing routes/users
app.use('/api/auth', auth);// ^^
app.use('/api/cards', cards);// ^^

const port = 3900;
http.listen(port, () => console.log(`Listening to port ${port}`));
