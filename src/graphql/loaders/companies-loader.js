const DataLoader = require('dataloader');
const CompaniesRepository = require('../../domain/repositories/companies-repository');

module.exports = new DataLoader(keys => CompaniesRepository.getByIds(keys));