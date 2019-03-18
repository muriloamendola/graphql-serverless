const PositionsRepository = require('../../domain/repositories/positions-repository');
const UsersRepository = require('../../domain/repositories/users-repository');

const typeDef = `
  extend type Query {
    user(id: String!): User
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
    user: (root, args) => UsersRepository.getById(args.id)
  },
  User: {
    company: (user, args, { CompaniesLoader }) => CompaniesLoader.load(user.companyId),
    position: (user, args) => PositionsRepository.getById(user.positionId),
    friends: (user) => UsersRepository.getByIds(user.friends)
  }
};

module.exports = {
  typeDef,
  resolvers
};
