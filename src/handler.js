const { graphqlLambda, graphiqlLambda } = require('apollo-server-lambda');
const myGraphQLSchema = require('./graphql/schema');

const graphqlHandler = graphqlLambda({ schema: myGraphQLSchema });
 
const graphiqlHandler = graphiqlLambda({ endpointURL: 'http://localhost:3000/graphql' });

module.exports = {
  graphqlHandler,
  graphiqlHandler
};


// Avoid CORS problem when using Angular Apollo Client for example
/* const graphqlHandler = (event, context, callback) => {
  const callbackFilter = (error, output) => {
    output.headers['Access-Control-Allow-Origin'] = '*';
    callback(error, output);
  };

  const handler = graphqlLambda({ schema: myGraphQLSchema });

  return handler(event, context, callbackFilter);
}; */