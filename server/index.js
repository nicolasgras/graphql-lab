//const express = require('express')
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import routes from './rest/routes';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

import cors from 'cors';

const app = express();
app.use('*', cors({ origin: '*' }));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// Middlewares
app.use(bodyParser.json());


// app.use(function(req, res, next) {
    
//   //res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// Mount REST on /api
app.use('/api', routes);

// Mount GraphQL on /graphql
const schema = makeExecutableSchema({
  typeDefs,
  resolvers: resolvers()
});
app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));



app.listen(4000, () => console.log('Express app listening on localhost:4000'));