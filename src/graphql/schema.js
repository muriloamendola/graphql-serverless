const _ = require('lodash');
const { makeExecutableSchema } = require('graphql-tools');
const { typeDef: User, resolvers: userResolvers } = require('./types/user');
const { typeDef: Company, resolvers: companyResolvers } = require('./types/company');
const { typeDef: Position, resolvers: positionResolvers } = require('./types/position');

const Query = `
  type Query {
    _empty: String
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [ Query, User, Company, Position ],
  resolvers: _.merge({}, userResolvers, companyResolvers, positionResolvers)
});
