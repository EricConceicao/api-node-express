import express from 'express';
import userRouter from './routes/user.routes.js';
import productRouter from './routes/product.routes.js'

const api = express();

api.use('/user', userRouter);
api.use('/product', productRouter);

api.get('/', (req, res) => {
  res.json({ message: "MINHA API TÁ ON NO GET" });
});

api.listen(3000, () => {
  console.log('API rodando na porta 3000. http://localhost:3000');
});