const { graphqlLambda, graphiqlLambda } = require('apollo-server-lambda');
const myGraphQLSchema = require('./graphql/schema');
const CompaniesLoader = require('./graphql/loaders/companies-loader');

const graphqlHandler = (event, context, callback) => {
  // Avoid CORS problem when using Angular Apollo Client for example
  const callbackFilter = (error, output) => {
    output.headers['Access-Control-Allow-Origin'] = '*';
    callback(error, output);
  };

  const handler = graphqlLambda((event, context) => ({
    schema: myGraphQLSchema,
    context: {
      event,
      context,
      CompaniesLoader
    }
  }));

  return handler(event, context, callbackFilter);
};
 
const graphiqlHandler = graphiqlLambda({ endpointURL: 'http://localhost:3000/graphql' });

module.exports = {
  graphqlHandler,
  graphiqlHandler
};
