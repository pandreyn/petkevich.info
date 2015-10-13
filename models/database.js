var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://postgres:12345678@localhost:5432/sites';

var client = new pg.Client(connectionString);
client.connect();

var query = client.query('CREATE TABLE sites(id SERIAL PRIMARY KEY, name VARCHAR(40) not null, description VARCHAR(255) not null, url VARCHAR(255) not null)');
query.on('end', function () {
  client.end();
});
