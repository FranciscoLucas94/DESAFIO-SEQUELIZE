import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';
import Product from './Product.js';

const Order = sequelize.define('Order', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  quantidade: { type: DataTypes.INTEGER, allowNull: false }
});

// relações
User.hasMany(Order, { foreignKey: 'usuario_id' });
Order.belongsTo(User, { foreignKey: 'usuario_id' });

Product.hasMany(Order, { foreignKey: 'produto_id' });
Order.belongsTo(Product, { foreignKey: 'produto_id' });

export default Order;