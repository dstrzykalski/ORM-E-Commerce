// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    // define an id column
    id: {
      // integers as input
      type: DataTypes.INTEGER,
      // doesn't allow empty values
      allowNull: false,
      // makes this the Primary Key
      primaryKey: true,
      // confirms auto increment
      autoIncrement: true
    },
    // define a product_name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // define a price column
    price: {
      // decimal as input
      type: DataTypes.DECIMAL,
      allowNull: false,
      // validate that the value is a decimal
      validate: {
        isDecimal: true
      }
    },
    // define a stock column
    stock: {
      // same as above
      type: DataTypes.INTEGER,
      allowNull: false,
      // set a default value of 10
      defaultValue: 10,
    },
    // define a category_id column
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // reference the `category` model's id
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
