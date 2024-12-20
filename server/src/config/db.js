require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  `mssql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`, {
  dialect: 'mssql',
  dialectOptions: {
    encrypt: true,  // Use encrypt if you're using SSL/TLS
    trustServerCertificate: true,  // Trust the server certificate (only for development)
  }
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
