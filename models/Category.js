const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      // sets type as number
      type: DataTypes.INTEGER,
      // doesn't allow empty values
      allowNull: false,
      // makes id the primary key
      primaryKey: true,
      // increments the value automatically
      autoIncrement: true
    },
    category_name: {
      // same as above 
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
