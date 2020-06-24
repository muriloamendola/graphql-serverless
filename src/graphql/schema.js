const { gql } = require('apollo-server-lambda');
const positionsRepository = require('../domain/repositories/positions-repository');
const usersRepository = require('../domain/repositories/users-repository');
const companiesRepository = require('../domain/repositories/companies-repository');

const typeDefs = gql`
  type Query {
    user(id: String!): User
  }

  type Position {
    id: String!
    name: String!
  }

  type Company {
    id: String!
    name: String!
  }

  type User {
    id: String!
    name: String!
    company: Company!
    position: Position!
    friends: [User]
  }
`;

const resolvers = {
  Query: {
    user: (root, args) => usersRepository.getById(args.id)
  },
  User: {
    company: (user, args) => companiesRepository.getById(user.companyId),
    position: (user, args) => positionsRepository.getById(user.positionId),
    friends: (user) => usersRepository.getByIds(user.friends)
  }
};

module.exports = {
  typeDefs,
  resolvers
};
