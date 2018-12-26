var config = {};

config.web = {};
config.web.host = "localhost";
config.web.porta = 3000;

config.mongodb = {};
config.mongodb.host = "localhost";
config.mongodb.porta = 27017;
config.mongodb.database = "db";

config.msg = {};
config.msg.jsonError = {error: "Aconteceu um erro."};

module.exports = config;