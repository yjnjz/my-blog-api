const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-148444.okta.com',
  token: '007O3PgAK6ZlLfhUhoOcW1YCGAlyGnwL4M7wQmAvqk'
});

module.exports = client;