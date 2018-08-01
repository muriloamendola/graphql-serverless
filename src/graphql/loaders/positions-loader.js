const DataLoader = require('dataloader');
const PositionsRepository = require('../../domain/repositories/positions-repository');

module.exports = new DataLoader(keys => PositionsRepository.getByIds(keys));