import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import docsRouter from './docs/docs.router.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/docs', docsRouter);

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}`);
});
