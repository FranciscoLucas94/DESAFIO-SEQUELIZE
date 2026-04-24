import Product from '../models/Product.js';

export const createProduct = async (data) => Product.create(data);
export const getProducts = async () => Product.findAll();
export const getProduct = async (id) => Product.findByPk(id);

export const updateProduct = async (id, data) => {
  const p = await Product.findByPk(id);
  if (!p) return null;
  return p.update(data);
};

export const deleteProduct = async (id) => {
  const p = await Product.findByPk(id);
  if (!p) return null;
  await p.destroy();
  return true;
};