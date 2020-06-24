const { ApolloServer } = require('apollo-server-lambda');
const myGraphQLSchema = require('./graphql/schema');


const server = new ApolloServer({
  ...myGraphQLSchema,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
  playground: {
    endpoint: "/dev/graphql"
  }
});

const graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});

module.exports = {
  graphqlHandler
};
