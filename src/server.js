import express from 'express';

// Router imports //
import userRouter from './routers/user.routes.js';
import productRouter from './routers/product.routes.js';
import authRouter from './routers/auth.routes.js';

const api = express();

api.use('/user', userRouter);
api.use('/product', productRouter);
api.use('/auth', authRouter);

api.get('/', (req, res) => {
  res.json({ message: "Api online" });
});

api.listen(3000, () => {
  console.log('Api on port 3000. http://localhost:3000');
});