const RepositoryBase = require('./repository-base');

const TableName = `${process.env.STAGE}.users`;

class UsersRepository extends RepositoryBase {
  constructor () {
    super(TableName);
  }

  getById (id) {
    return this.getByKey({ id });
  }

  getByIds (ids) {
    return this.batchGet(ids.map(id => ({ id })));
  }
}

module.exports = new UsersRepository();
