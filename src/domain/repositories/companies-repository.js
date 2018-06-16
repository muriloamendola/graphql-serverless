const RepositoryBase = require('./repository-base');

const TableName = `${process.env.STAGE}.companies`;

class CompaniesRepository extends RepositoryBase {
  constructor () {
    super(TableName);
  }

  getById (id) {
    return this.getByKey({ id });
  }
}

module.exports = new CompaniesRepository();
