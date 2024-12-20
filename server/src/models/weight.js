const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user'); // Import User model to define the relationship

const Weight = sequelize.define('Weight', {
  WeightID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  UserID: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'UserID'
    }
  },
  CurrentWeight: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  Date: {
    type: DataTypes.DATE,
    allowNull: false
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
  tableName: 'Weights',
  timestamps: false
});

// Defining the relationship (foreign key)
Weight.belongsTo(User, { foreignKey: 'UserID' });

module.exports = Weight;
