var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String,
    myCustomQuery: MyCustomObject,
    myCustomQueryParam(p1: String!, p2: Int): MyCustomObject,
    myStringQuery: Int
  }

  type MyCustomObject {
    field1: String,
    field2: Int!    
  }
`);

class MyCustomObject {
    constructor(field1, field2) {
        this.field1 = field1;
        this.field2 = field2;
    }
}

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  myCustomQuery: () => {
    return new MyCustomObject("Place to code backend operation (select * from .....)", 123);
  },
  myCustomQueryParam: function({p1, p2}) {
    let field1 = p1 + "-result";
    let field2 = p2;    
    return new MyCustomObject(field1, field2);
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');