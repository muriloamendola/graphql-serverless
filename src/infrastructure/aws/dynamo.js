const AWS = require('aws-sdk');
const Options = { region: 'localhost', endpoint: process.env.DYNAMODB_HOST_OFFLINE || 'http://localhost:8000' };
const DynamoDB = process.env.IS_OFFLINE ? new AWS.DynamoDB.DocumentClient(Options) : new AWS.DynamoDB.DocumentClient();

const execute = (command) => (params) => DynamoDB[command](params).promise();

const scan = (params) => resolvePagination('scan', params);
const query = (params) => resolvePagination('query', params);

const resolvePagination = (command, params, result = []) => {
  return execute(command)(params)
    .then(data => {
      result = result.concat(data.Items);
      if (data.LastEvaluatedKey) {
        params.ExclusiveStartKey = data.LastEvaluatedKey;
        return resolvePagination(command, params, result);
      }
      return result;
    });
};

const put = execute('put');
const update = execute('update');
const remove = execute('delete');
const get = execute('get');
const batchGet = execute('batchGet');
const batchWrite = execute('batchWrite');

module.exports = {
  put,
  update,
  delete: remove,
  get,
  query,
  scan,
  batchGet,
  batchWrite
};
