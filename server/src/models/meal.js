const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user'); // Import User model to define the relationship

const Meal = sequelize.define('Meal', {
  MealID: {
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
  MealName: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  MealDate: {
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
  tableName: 'Meals',
  timestamps: false
});

// Defining the relationship (foreign key)
Meal.belongsTo(User, { foreignKey: 'UserID' });

module.exports = Meal;
