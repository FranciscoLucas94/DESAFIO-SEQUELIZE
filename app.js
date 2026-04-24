import express from 'express';
import sequelize from './src/config/database.js';

import userRoutes from './src/routes/userRoutes.js';
import productRoutes from './src/routes/productRoutes.js';
import orderRoutes from './src/routes/orderRoutes.js';

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(productRoutes);
app.use(orderRoutes);

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao banco");

    await sequelize.sync({ alter: true });
    console.log("Tabelas sincronizadas");

    app.listen(3000, () => {
      console.log("Rodando na porta 3000");
    });

  } catch (error) {
    console.error("Erro ao conectar no banco:", error);
  }
}

startServer();