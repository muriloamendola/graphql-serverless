const { graphqlLambda, graphiqlLambda } = require('apollo-server-lambda');
const myGraphQLSchema = require('./graphql/schema');

const graphqlHandler = graphqlLambda({ schema: myGraphQLSchema });

const graphiqlHandler = graphiqlLambda({ endpointURL: 'http://localhost:3000/graphql' });

module.exports = {
  graphqlHandler,
  graphiqlHandler
};