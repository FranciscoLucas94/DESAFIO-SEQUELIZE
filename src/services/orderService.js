import Order from '../models/Order.js';
import User from '../models/User.js';
import Product from '../models/Product.js';

export const createOrder = async ({ usuario_id, produto_id, quantidade }) => {

  const user = await User.findByPk(usuario_id);
  if (!user) throw new Error("Usuário não existe");

  const product = await Product.findByPk(produto_id);
  if (!product) throw new Error("Produto não existe");

  if (quantidade > product.estoque) {
    throw new Error("Estoque insuficiente");
  }

  product.estoque -= quantidade;
  await product.save();

  return await Order.create({ usuario_id, produto_id, quantidade });
};

export const getOrders = async () => {
  return await Order.findAll({ include: [User, Product] });
};

export const updateOrder = async (id, { usuario_id, produto_id, quantidade }) => {
  const order = await Order.findByPk(id);
  if (!order) throw new Error("Pedido não encontrado");

  const user = await User.findByPk(usuario_id);
  if (!user) throw new Error("Usuário não existe");

  const product = await Product.findByPk(produto_id);
  if (!product) throw new Error("Produto não existe");

  if (quantidade > product.estoque) {
    throw new Error("Estoque insuficiente");
  }

  product.estoque -= quantidade;
  await product.save();

  return await order.update({ usuario_id, produto_id, quantidade });
};

export const deleteOrder = async (id) => {
  const order = await Order.findByPk(id);
  if (!order) throw new Error("Pedido não encontrado");
  return await order.destroy();
};
