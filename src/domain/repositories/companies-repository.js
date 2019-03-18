const _ = require('lodash');
const RepositoryBase = require('./repository-base');

const TableName = `${process.env.STAGE}.companies`;

class CompaniesRepository extends RepositoryBase {
  constructor () {
    super(TableName);
  }

  getById (id) {
    return this.getByKey({ id });
  }

  getByIds (ids) {
    return this.batchGet(_.map(ids, id => ({ id })));
  }
}

module.exports = new CompaniesRepository();
