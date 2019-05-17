const express = require('express');
const graphqlHTTP = require('express-graphql');
const Schema = require('./Schema/Schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow coss-origin requests
app.use(cors());

//connect to mLab database
mongoose.connect('mongodb+srv://marlon:test123@cluster0-a53tv.mongodb.net/test?retryWrites=true')
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening on request on port 4000');
});