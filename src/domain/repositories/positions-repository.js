const RepositoryBase = require('./repository-base');

const TableName = `${process.env.STAGE}.positions`;

class PositionsRepository extends RepositoryBase {
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

module.exports = new PositionsRepository();
