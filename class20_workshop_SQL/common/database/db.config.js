const { Sequelize } = require('sequelize');

module.exports = new Sequelize('erestaurant', 'postgres', 'ivo123', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5555, // by default this will use the default port, can be removed
    logging: true,
  });