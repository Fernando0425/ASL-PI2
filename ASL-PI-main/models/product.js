const Sequelize = require("sequelize");
const sequelize = require("../utils/db");

const Product = sequelize.define(
  "product",
  {
    product_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    product_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    product_price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    product_stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    product_img: Sequelize.STRING,
  },
  {
    schema: "tienda",
    createdAt: false,
    updatedAt: false
  }
);

module.exports = Product;
