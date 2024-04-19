import express from 'express';
import cors from 'cors';

import router from './router.js';

const app = express();

app.use(cors());

app.use(express.json());

// http://localhost:8000/blog
app.use('/blog', router);

// http://localhost:8000/
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
