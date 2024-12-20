// server/models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  UserID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Username: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  Password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  Email: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  Age: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  Height: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  TargetWeight: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  TargetDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  CreatedAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.NOW
  },
  UpdatedAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.NOW
  }
}, {
  tableName: 'Users',
  timestamps: false
});

module.exports = User;
