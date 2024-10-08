const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    // define an id column
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true
    },
    // define a product_id column
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // reference the `product` model's id
      references: {
        model: 'product',
        key: 'id'
      }
    },
    // define a tag_id column
    tag_id: {
      // same as above
      type: DataTypes.INTEGER,
      allowNull: false,
      // reference the `tag` model's id
      references: {
        model: 'tag',
        key: 'id'
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
