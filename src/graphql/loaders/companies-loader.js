const _ = require('lodash/fp');
const DataLoader = require('dataloader');
const CompaniesRepository = require('../../domain/repositories/companies-repository');

module.exports = new DataLoader(async keys => {
  const companies = await CompaniesRepository.getByIds(keys);

  // just to grant result order
  const result = [];
  _.each(id => {
    result.push(_.find({ id }, companies));
  }, keys);

  return Promise.resolve(result);
});