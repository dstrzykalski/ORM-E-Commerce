// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // links by category_id
  foreignKey: 'category_id',
  // deletes all data associated with the category
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  //same as above
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // links by product_id
  through: ProductTag,
  // deletes all data within product
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  //same as above
  through: ProductTag,
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
