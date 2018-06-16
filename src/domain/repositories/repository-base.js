const Dynamo = require('../../infrastructure/aws/dynamo');

class RepositoryBase {
  constructor (TableName) {
    this.TableName = TableName;
  }
  
  async getByKey (Key) {
    const params = {
      TableName: this.TableName,
      Key
    };

    const result = await Dynamo.get(params);
    return result.Item;
  };

  async batchGet (Keys) {
    try {
      let RequestItems = {};
      RequestItems[this.TableName] = { Keys };

      const result = await Dynamo.batchGet({ RequestItems });
      return result.Responses[this.TableName];
    } catch (e) {
      console.error('Error at RepositoryBase.batchGet method', e);
      throw e;
    }
  }
};

module.exports = RepositoryBase;
