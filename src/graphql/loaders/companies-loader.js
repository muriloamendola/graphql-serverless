const DataLoader = require('dataloader');
const CompaniesRepository = require('../../domain/repositories/companies-repository');

module.exports = new DataLoader(async keys => {
  const companies = await CompaniesRepository.getByIds(keys);

  // just to grant result order
  const result = [];
  for(id in keys) result.push(companies.find(c => c.id = id))
 
  return Promise.resolve(result);
});