const MongoClient = require('mongodb').MongoClient;

const test = require('assert');

// Connection url

const url = 'mongodb://cloud.mongodb.com/v2/5ec3034d4c7ad81b7d5a80ca#clusters';

// Database Name

const dbName = 'WebService';

// Connect using MongoClient

MongoClient.connect(url, function(err, client) {

// Use the admin database for the operation

    const adminDb = client.db(dbName).admin();

// List all the available databases

    adminDb.listDatabases(function(err, dbs) {

        test.equal(null, err);

        test.ok(dbs.databases.length > 0);

        client.close();

    });

});