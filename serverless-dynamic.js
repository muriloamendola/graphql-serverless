const fs = require('fs');
const path = require('path');
const YAML = require('yamljs');

const readYmlFilesFromPath = ymlFilePath => {
  const files = fs.readdirSync(ymlFilePath);

  const merged = files
    .map(file => fs.readFileSync(path.join(ymlFilePath, file), 'utf8'))
    .map(raw => YAML.parse(raw))
    .reduce((result, handler) => Object.assign(result, handler), {});

  return merged;
};

module.exports = {
  resources: () => readYmlFilesFromPath('./src/infrastructure/aws/resources/descriptors')
};
