import express from 'express';
import itemsRouter from './routes/wishlist.js';
import cors from 'cors'


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/products', itemsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
