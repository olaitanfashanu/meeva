const express = require('express');
const { createHandler } = require ('graphql-http/lib/use/express');
const mongoose = require('mongoose');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();
const port = 3000;

// connect to MongoDB
mongoose.connect('mongodb://localhost:27017/dataCollection');

// integrate graphql-http with Express
app.use('/graphl', createHandler({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, () => {
    console.log('server running at http://localhost:${port}/graphql');
});