const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'Blood-Donation-Tracker',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

