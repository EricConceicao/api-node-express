import express from 'express';
import bodyParser from 'body-parser';

// Router imports //
import userRouter from './routers/user.routes.js';
import productRouter from './routers/product.routes.js';
import authRouter from './routers/auth.routes.js';

import { PORT } from './config.js';

const api = express();

api.use(bodyParser.json());

api.use('/user', userRouter);
api.use('/product', productRouter);
api.use('/auth', authRouter);

api.get('/', (req, res) => {
  res.json({ message: "Api online" });
});

api.listen(PORT, () => {
  console.log(`Api on port ${PORT}. http://localhost:${PORT}`);
});
