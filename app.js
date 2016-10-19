var server = require('./index.js').start({port: process.env.PORT || 8080, static_directory: __dirname + '/public'});
