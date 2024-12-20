const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Meal = require('./meal'); // Import Meal model to define the relationship

const MealDetail = sequelize.define('MealDetail', {
  DetailID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  MealID: {
    type: DataTypes.INTEGER,
    references: {
      model: Meal,
      key: 'MealID'
    }
  },
  MealDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  NutrientType: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  Amount: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true
  }
}, {
  tableName: 'MealDetails',
  timestamps: false
});

// Defining the relationship (foreign key)
MealDetail.belongsTo(Meal, { foreignKey: 'MealID' });

module.exports = MealDetail;
